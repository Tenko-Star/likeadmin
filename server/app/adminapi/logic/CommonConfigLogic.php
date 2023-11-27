<?php

namespace app\adminapi\logic;

use app\common\service\ConfigService;
use Exception;

class CommonConfigLogic
{
    public static function get(string $name): mixed
    {
        [$type, $name] = self::checkName($name);

        return ConfigService::get($type, $name, '');
    }

    public static function set(string $name, $value)
    {
        [$type, $name] = self::checkName($name);

        ConfigService::set($type, $name, $value);
    }

    public static function getAll($name): array
    {
        return ConfigService::get($name) ?? [];
    }

    public static function setAll(array $params)
    {
        foreach ($params as $key => $param) {
            if (!is_string($key)) {
                continue;
            }

            self::set($key, $param);
        }
    }

    private static function checkName(string $name): array
    {
        $arr = explode('.', $name, 2);
        if (count($arr) < 2 || empty($arr[1])) {
            throw new Exception('Incorrect name');
        }

        return $arr;
    }
}