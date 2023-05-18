<?php

namespace app\common\service;

use app\common\enum\LogTypeEnum;
use app\common\library\message\ClientMessage;
use app\common\library\message\HeartBeat;
use app\common\library\message\UidMessage;
use think\facade\Cache;
use think\facade\Config;
use think\facade\Log;
use think\facade\Queue;
use Woodylan\Websocket\WsServer;

class MessageService
{
    private string $systemId;

    private WsServer $server;

    private array $config;

    public function __construct()
    {
        $this->config = Config::get('message');
        $this->systemId = $this->config['system_id'] ?? 'default';
        $this->server = new WsServer($this->parseHost(), $this->config['port'] ?? '6009');
    }

    public function setSystemId(string $systemId): void
    {
        $this->systemId = $systemId;
    }

    public function getSystemId(): string
    {
        return $this->systemId;
    }

    /**
     * 客户端注册
     *
     * @param string $clientId
     * @param string $uid 关联用户
     * @return void
     */
    public function login(string $clientId, string $uid): void
    {
        if ($this->isClientOnline($clientId)) {
            return;
        }

        $now = time();

        // 心跳包逻辑
        $key = 'msg:hb:' . $clientId;
        $hbTTL = $this->config['heart_beat_ttl'] ?? 60;
        $timeout = $this->config['connect_timeout'] ?? 120;
        Cache::set($key, $now, $hbTTL);
        Queue::later($timeout, HeartBeat::class, ['clientId' => $clientId], $this->config['queue'] ?: null);

        // 客户端信息
        $clientKey = 'msg:info:' . $clientId;
        Cache::set($clientKey, [
            'uid' => $uid,
            'create_time' => $now,
            'client_id' => $clientId,
            'system_id' => $this->systemId
        ]);

        // 用户逻辑
        $uidKey = 'msg:clients:' . $uid;
        if (Cache::has($uidKey)) {
            Cache::push($uidKey, $clientId);
        } else {
            Cache::set($uidKey, [$clientId]);
        }

        self::log('用户登录成功', [
            'client_id' => $clientId,
            'user_id' => $uid
        ], LogTypeEnum::DEBUG);
    }

    /**
     * 客户端注销
     *
     * @param string $clientId
     * @return void
     */
    public function logout(string $clientId): void
    {
        $key = 'msg:hb:' . $clientId;
        Cache::delete($key);

        $clientKey = 'msg:info:' . $clientId;
        $clientData = Cache::get($clientKey, []);
        Cache::delete($clientKey);

        $uidKey = 'msg:clients:' . ($clientData['uid'] ?? 'null');
        $uidArr = Cache::get($uidKey, []);
        $clientPos = array_search($clientId, $uidArr);
        if ($clientPos !== false) {
            // todo PHP没有锁，可能会出点问题，考虑重新搞一下cache驱动来保证并发安全
            unset($uidArr[$clientPos]);
            Cache::set($uidKey, $uidArr);
        }

        $result = $this->server->closeClient($this->systemId, $clientId);
        if (empty($result)) {
            self::log('注销用户失败，未知错误', [
                'client_id' => $clientId,
                'result' => null
            ], LogTypeEnum::WARNING);
            return;
        }

        if (!empty($result['code']) && $result['code'] === -1) {
            self::log('注销用户失败，' . $result['msg'], [
                'client_id' => $clientId,
                'result' => $result
            ], LogTypeEnum::WARNING);
            return;
        }

        self::log('注销用户成功', [
            'client_id' => $clientId,
            'result' => $result
        ], LogTypeEnum::DEBUG);
    }

    public function register(string $systemId = ''): bool
    {
        if (!$systemId) {
            $systemId = $this->systemId;
        }

        $result = $this->server->register($systemId);

        if (empty($result) || !is_array($result)) {
            self::log('服务注册失败，未知错误', null, LogTypeEnum::ERROR);
            return false;
        }

        if (isset($result['code']) && $result['code'] === -1) {
            self::log($result['msg'], $result, LogTypeEnum::ERROR);
            return false;
        }

        self::log('服务注册成功，System ID: ' . $systemId);

        return true;
    }

    /**
     * 刷新心跳
     *
     * @param string $clientId
     * @return void
     */
    public function heartBeat(string $clientId): void
    {
        $key = 'msg:hb:' . $clientId;
        $ttl = $this->config['heart_beat_ttl'] ?? 60;
        Cache::set($key, time(), $ttl);
    }

    /**
     * 检查某一个uid是否在线
     *
     * @param int $uid
     * @return int 在线客户端数量（可能不准）
     */
    public function isUidOnline(int $uid): int
    {
        $uidKey = 'msg:clients:' . $uid;
        $uidArr = Cache::get($uidKey, []);

        return count($uidArr);
    }

    /**
     * 检查某个客户端是否在线
     *
     * @param string $clientId
     * @return bool
     */
    public function isClientOnline(string $clientId): bool
    {
        $hbKey = 'msg:hb:' . $clientId;
        if (Cache::has($hbKey)) {
            // hot online
            return true;
        }

        $infoKey = 'msg:info:' . $clientId;
        $info = Cache::get($infoKey, []);
        if (!empty($info) && !empty($info['uid'])) {
            $uidKey = 'msg:clients:' . $info['uid'];
            $clientIds = Cache::get($uidKey, []);
            if (in_array($clientId, $clientIds)) {
                // maybe online
                return true;
            }
        }

        return false;
    }

    private function parseHost(): string
    {
        $ssl = $this->config['ssl'] ?? false;
        $host = $this->config['host'] ?? '127.0.0.1';

        return sprintf('http%s://%s', $ssl ? 's' : '', $host);
    }

    /**
     * 记录日志到Message独立文件内
     *
     * @param string $msg
     * @param array|null $data
     * @param string $type
     * @return void
     */
    public static function log(string $msg, ?array $data = null, string $type = LogTypeEnum::INFO): void
    {
        $debug = Config::get('message.debug', false);

        if ($type !== LogTypeEnum::DEBUG || !$debug) {
            return;
        }

        Log::write(
            sprintf("Message log\n[%s] %s\n[DATA] %s\n", strtoupper($type), $msg, json_encode($data)),
            'message'
        );
    }

    /**
     * 记录异常到Message独立文件内
     *
     * @param \Throwable $throwable
     * @param string $type
     * @return void
     */
    public static function logException(\Throwable $throwable, string $type = LogTypeEnum::WARNING): void
    {
        self::log($throwable->getMessage(), $throwable->getTrace(), $type);
    }


    /**
     * 发送消息给客户端
     *
     * @param ClientMessage $message
     * @return bool
     */
    public function sendToClient(ClientMessage $message): bool
    {
        if (!$this->isClientOnline($message->getClientId())) {
            return false;
        }

        $result = $this->server->sendToClientId(
            $this->systemId,
            $message->getClientId(),
            $message->getSender(),
            $message->getCode(),
            $message->getMessage(),
            $message->getData()
        );

        if (!$result || (isset($result['code']) && $result['code'] !== 0)) {
            if (isset($result['msg'])) self::log($result['msg'], null, LogTypeEnum::WARNING);
            return false;
        }

        return true;
    }

    /**
     * 发送消息给用户
     *
     * @param UidMessage $message
     * @return bool
     */
    public function sendToUser(UidMessage $message): bool
    {
        $result = $this->server->sendToClientIds(
            $this->systemId,
            $message->getClients(),
            $message->getSender(),
            $message->getCode(),
            $message->getMessage(),
            $message->getData()
        );

        if (!$result || (isset($result['code']) && $result['code'] !== 0)) {
            if (isset($result['msg'])) self::log($result['msg'], null, LogTypeEnum::WARNING);
            return false;
        }

        return true;
    }
}