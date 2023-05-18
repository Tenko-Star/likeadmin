<?php

namespace app\common\library\message;

class ClientMessage extends Message
{
    private string $clientId;

    public function setClientId(string $client): void
    {
        $this->clientId = $client;
    }

    public function getClientId(): string
    {
        return $this->clientId;
    }
}