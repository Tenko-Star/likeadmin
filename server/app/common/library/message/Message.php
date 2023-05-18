<?php

namespace app\common\library\message;

abstract class Message
{
    const SUCCESS = 0;

    const FAIL = 1;

    private string $sender;

    private string $message;

    private array $data;

    private int $code;

    public function __construct(string $message, array $data, int $code = Message::SUCCESS, string $sender = 'system')
    {
        $this->message = $message;
        $this->data = $data;
        $this->code = $code;
        $this->sender = $sender;
    }

    public function getSender(): string
    {
        return $this->sender;
    }

    public function getMessage(): string
    {
        return $this->message;
    }

    public function getData(): string
    {
        return json_encode($this->data, JSON_FORCE_OBJECT);
    }

    public function getCode(): int
    {
        return $this->code;
    }

    public static function success(string $msg, string $sender = 'system', array $data = []): static
    {
        return new static($msg, $data, Message::SUCCESS, $sender);
    }

    public static function fail(string $msg, string $sender = 'system', array $data = []): static
    {
        return new static($msg, $data, Message::FAIL, $sender);
    }

    public static function data(array $data, string $msg, string $sender = 'system', int $code = Message::SUCCESS): static
    {
        return new static($msg, $data, $code, $sender);
    }
}