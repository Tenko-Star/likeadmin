import type { App } from 'vue'
import { DependManager, type PluginConfig } from '@/utils/plugin'
const modules = import.meta.glob('./**/*', { eager: true })

// 安装方法，执行某一类相同操作
function install(app: App<Element>) {
    const manager = new DependManager(app)

    Object.keys(modules).forEach((key) => {
        const name = key.replace(/(.*\/)*([^.]+).*/gi, '$2')
        const type = key.replace(/^\.\/([\w-]+).*/gi, '$1')
        const module: any = modules[key]
        if (module.default) {
            switch (type) {
                // 用于注册全局指令
                case 'directives':
                    app.directive(name, module.default)
                    break
                // 使用插件
                case 'plugins':
                    if (typeof module.default === 'object') {
                        const config: PluginConfig = {
                            name: name,
                            init: module.default.init,
                            deps: module.default?.deps ?? []
                        }
                        manager.add(config)
                    } else {
                        const config: PluginConfig = {
                            name: name,
                            init: module.default
                        }
                        manager.add(config)
                    }

                    break
            }
        }
    })

    manager.run()
}

export default {
    install
}
