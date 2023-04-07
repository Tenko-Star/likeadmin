<?php

namespace app\common\enum;

class BaseEnum
{
    protected mixed $value;

    private static bool $init = false;
    private static array $cache = [];

    protected function __construct(mixed $value) {
        $this->value = $value;
    }

    public function equal(mixed $value): bool {
        return $this->value === $value;
    }

    public function value(): mixed {
        return $this->value;
    }

    protected static function init() {
        $ref = new \ReflectionClass(static::class);
        static::$cache = $ref->getConstants();
    }

    public static function __callStatic($name, $args) {
        if (!static::$init) {
            static::init();
        }

        if (isset(static::$cache[$name])) {
            return new static(static::$cache[$name]);
        }

        throw new \Exception('Could not found this enum value');
    }

    public static function have(mixed $value): bool {
        if (!static::$init) {
            static::init();
        }

        return in_array($value, static::$cache);
    }

    public static function from(mixed $value): static {
        if (static::have($value)) {
            return new static($value);
        }

        throw new \Exception('invalid enumeration value');
    }
}