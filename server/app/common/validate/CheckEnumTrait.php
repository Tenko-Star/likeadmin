<?php

namespace app\common\validate;

use app\common\library\BaseEnum;

trait CheckEnumTrait
{
    public function checkEnum($value, $rule) {
        $rule = str_replace('.', '\\', $rule);

        $class = '\\app\\common\\enum\\' . $rule;
        if (class_exists($class) && is_subclass_of($class, BaseEnum::class)) {
            return call_user_func_array([$class, 'have'], [$value]) ? true : '类型或状态错误';
        }

        return '参数错误';
    }
}