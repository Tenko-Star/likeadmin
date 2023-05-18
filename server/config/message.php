<?php

/**
 * 消息系统配置文件
 */

return [
    // debug
    'debug' => true,

    // 主机名
    'host' => '127.0.0.1',
    // 端口
    'port' => '6009',
    // 是否启用https
    'ssl' => false,
    // 默认systemID
    'system_id' => 'test',
    // 队列名
    'queue' => 'likeadmin_zyy',

    /**  心跳包相关设置
      *
      *  心跳包具有有效期，心跳包到期后不会立刻断开连接，而是在下一个检测时断开。
      *  如果到期后及时续期，则不会断开。
      *  心跳包发送间隔应小于心跳包有效期。
     */

    //心跳有效期（秒）
    'heart_beat_ttl' => 60,
    // 心跳检测周期（秒）
    'connect_timeout' => 120
];