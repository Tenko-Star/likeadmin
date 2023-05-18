<?php

namespace app\common\command;

use app\common\service\MessageService;
use think\console\Command;
use think\console\Input;
use think\console\input\Argument;
use think\console\Output;

class MessageRegister extends Command
{
    protected function configure()
    {
        $this->setName('message_register')
            ->setDescription('Register this project to the information service.')
            ->addArgument('systemId', Argument::OPTIONAL, 'Server System ID', '');
    }

    protected function execute(Input $input, Output $output)
    {
        $systemId = $input->getArgument('systemId');

        $messageService = new MessageService();
        $result = $messageService->register($systemId);
        if ($result) {
            $output->writeln(sprintf('服务注册成功，注册的ID为%s', $systemId ?: $messageService->getSystemId()));
        } else {
            $output->writeln(sprintf('服务注册失败，注册的ID为%s，请在日志中查看详情。', $systemId ?: $messageService->getSystemId()));
        }

    }
}