<?php

namespace app\common\library\message;

use think\facade\Cache;

class UidMessage extends Message
{
    private array $clients;

    public function setUid(int $uid): void
    {
        $uidKey = 'msg:clients:' . $uid;
        $clients = Cache::get($uidKey, []);
        $this->clients = $clients;
    }

    public function getClients(): array
    {
        return $this->clients;
    }
}