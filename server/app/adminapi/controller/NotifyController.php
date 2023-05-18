<?php

namespace app\adminapi\controller;

use app\adminapi\logic\NotifyLogic;
use app\adminapi\service\AdminMessageService;
use app\adminapi\validate\NotifyValidate;

class NotifyController extends BaseAdminController
{
    public function login()
    {
        $params = (new NotifyValidate())->post()->goCheck(null, ['admin_id' => $this->adminId]);
        NotifyLogic::login($params);
        if (NotifyLogic::hasError()) {
            return $this->fail(NotifyLogic::getError());
        }

        return $this->success();
    }

    public function link()
    {
        $params = (new NotifyValidate())->post()->goCheck();
        $result = AdminMessageService::link($params['client_id']);

        if ($result) {
            return $this->success();
        } else {
            return $this->fail('连接失败');
        }
    }

    public function ping()
    {
        $params = (new NotifyValidate())->post()->goCheck();
        AdminMessageService::sendToClientFromSystem($params['client_id'], 'pong');

        return $this->success();
    }
}