<?php

namespace app\adminapi\controller;

use \app\adminapi\logic\CommonConfigLogic;

class CommonController extends BaseAdminController
{
    public function getAll() {
        try {
            $name = $this->request->get('name');

            return $this->data(CommonConfigLogic::getAll($name));
        } catch (\Exception $e) {
            return $this->fail('获取数据失败');
        }
    }

    public function setAll() {
        try {
            $params = $this->request->post();
            CommonConfigLogic::setAll($params);

            return $this->success();
        } catch (\Exception $e) {
            return $this->fail('保存失败');
        }
    }
}