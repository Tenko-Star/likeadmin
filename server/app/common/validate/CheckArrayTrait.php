<?php

namespace app\common\validate;

trait CheckArrayTrait
{
    public function checkA2SLength($value, $rule) {
        $len = (int)$rule;
        $str = '';

        if (is_array($value)) {
            $str = implode(',', $value);
        }

        if (strlen($str) > $len) {
            return '数组长度超出限制';
        }

        return true;
    }
}