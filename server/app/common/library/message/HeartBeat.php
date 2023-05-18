<?php

namespace app\common\library\message;

use app\common\enum\LogTypeEnum;
use app\common\service\MessageService;
use JetBrains\PhpStorm\ArrayShape;
use think\facade\Cache;
use think\queue\Job;

class HeartBeat
{
    public function fire(
        Job $job,
        #[ArrayShape([
            'clientId' => ''
        ])] $data
    )
    {
        $key = 'msg:hb:' . $data['clientId'];
        if (!Cache::has($key)) {
            $ms = new MessageService();
            $ms->logout($data['clientId']);
            $job->delete();
            return;
        }

        $job->release(120);
        MessageService::log('用户存活', [
            'client_id' => $data['clientId']
        ], LogTypeEnum::DEBUG);
    }
}