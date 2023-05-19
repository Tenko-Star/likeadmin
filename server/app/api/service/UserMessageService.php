<?php

namespace app\api\service;

use app\common\library\message\ClientMessage;
use app\common\library\message\UidMessage;
use app\common\model\user\User;
use app\common\service\MessageService;

class UserMessageService
{
    /**
     * User login
     *
     * @param User $user
     * @param string $clientId
     * @return void
     * @throws \Exception
     */
    public static function login(int $user, string $clientId): void
    {
        $uid = 'user_' . $user;
        $ms = new MessageService();
        $ms->login($clientId, $uid);
    }

    /**
     * Refresh heartbeat timer
     *
     * @param string $clientId
     * @return void
     */
    public static function link(string $clientId): bool
    {
        $ms = new MessageService();
        return $ms->heartBeat($clientId);
    }

    /**
     * 给客户端发送系统消息
     *
     * @param string $clientId
     * @param string $msg
     * @param array|null $data
     * @return void
     */
    public static function sendToClientFromSystem(string $clientId, string $msg, array $data = []): void
    {
        $ms = new MessageService();
        $data = [
            'timestamp' => time(),
            ...$data
        ];
        $message = ClientMessage::data($data, $msg);
        $message->setClientId($clientId);

        $ms->sendToClient($message);
    }

    /**
     * 给用户发送系统消息
     *
     * @param int $userId
     * @param string $msg
     * @param array|null $data
     * @return void
     */
    public static function sendToUserFromSystem(int $userId, string $msg, array $data = []): void
    {
        $ms = new MessageService();
        $data = [
            'timestamp' => time(),
            ...$data
        ];
        $message = UidMessage::data($data, $msg);
        $message->setUid($userId);

        $ms->sendToUser($message);
    }

    /**
     * 给用户发送信息
     *
     * @param int $userId
     * @param string $msg
     * @param array|null $data
     * @return void
     */
    public static function sendToUserFromUser(int $target, User $source, string $msg, array $data = []): void
    {
        $ms = new MessageService();
        $data = [
            'timestamp' => time(),
            'source' => $source->toSource(),
            ...$data
        ];
        $message = UidMessage::data($data, $msg, 'user');
        $message->setUid($target);

        $ms->sendToUser($message);
    }
}