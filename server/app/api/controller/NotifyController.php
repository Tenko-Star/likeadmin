<?php

namespace app\api\controller;

use app\api\logic\NotifyLogic;
use app\api\service\UserMessageService;
use app\api\validate\NotifyValidate;

class NotifyController extends BaseApiController
{
    public function login()
    {
        $params = (new NotifyValidate())->post()->goCheck(null, ['user_id' => $this->userId]);
        NotifyLogic::login($params);
        if (NotifyLogic::hasError()) {
            return $this->fail(NotifyLogic::getError());
        }

        return $this->success();
    }

    public function link()
    {
        $params = (new NotifyValidate())->post()->goCheck();
        $result = UserMessageService::link($params['client_id']);

        if ($result) {
            return $this->success();
        } else {
            return $this->fail('连接失败');
        }
    }

    public function ping()
    {
        $params = (new NotifyValidate())->post()->goCheck();
        UserMessageService::sendToClientFromSystem($params['client_id'], 'pong');

        return $this->success();
    }
}