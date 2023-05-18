<?php

namespace app\adminapi\logic;

use app\api\service\UserMessageService;
use app\common\logic\BaseLogic;
use app\common\service\MessageService;

class NotifyLogic extends BaseLogic
{
    public static function login(array $params)
    {
        try {
            UserMessageService::login($params['admin_id'], $params['client_id']);
        } catch (\Exception $e) {
            MessageService::logException($e);
            self::setError($e->getMessage());
        }
    }
}