<?php

namespace app\common\util;

class LogStruct
{
    public string $key;

    public mixed $data;

    /**
     * @param string $key
     * @param mixed $data
     */
    public function __construct(string $key, mixed $data)
    {
        $this->key = $key;
        $this->data = $data;
    }


    public static function n(string $key, mixed $data): LogStruct
    {
        return new self($key, $data);
    }
}