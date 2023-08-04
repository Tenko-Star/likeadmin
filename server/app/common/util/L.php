<?php

namespace app\common\util;

use think\facade\Log;

class L
{
    protected static function log(string $level, string $name, array $data)
    {
        $jsonData = [];
        foreach ($data as $datum) {
            $jsonData[$datum->key] = $datum->data;
        }

        Log::write(sprintf(
            '%s: %s',
            $name,
            json_encode($jsonData)
        ), $level);
    }

    public static function d(string $name, LogStruct ...$data)
    {
        self::log('debug', $name, $data);
    }

    public static function ij(string $name, LogStruct ...$data)
    {
        self::log('info', $name, $data);
    }
}