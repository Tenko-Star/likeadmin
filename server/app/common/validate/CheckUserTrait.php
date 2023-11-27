<?php

namespace app\common\validate;

use app\common\model\user\User;

trait CheckUserTrait
{
    public function checkUser($value) {
        $user = User::findOrEmpty($value);

        if ($user->isEmpty()) {
            return '找不到该用户';
        }

        return true;
    }
}