<?php

namespace app\api\logic;

use app\api\service\UserMessageService;
use app\api\validate\NotifyValidate;
use app\common\logic\BaseLogic;
use app\common\service\MessageService;

class NotifyLogic extends BaseLogic
{
    public static function login(array $params)
    {
        try {
            UserMessageService::login($params['user_id'], $params['client_id']);
        } catch (\Exception $e) {
            MessageService::logException($e);
            self::setError($e->getMessage());
        }
    }
}