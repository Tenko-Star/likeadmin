<?php

namespace app\api\validate;

use app\common\validate\BaseValidate;

class NotifyValidate extends BaseValidate
{
    protected $rule = [
        'client_id' => 'require'
    ];

    protected $field = [
        'client_id' => '客户端ID'
    ];
}