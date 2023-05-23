import type { App } from 'vue'

type InitHandler = (app: App) => void

export interface PluginConfig {
    name: string
    init: InitHandler
    deps?: string[]
}

interface MapNode extends PluginConfig {
    isInit: boolean
}

export class DependManager {
    private readonly map: Record<string, MapNode>
    private readonly app: App

    constructor(app: App) {
        this.map = {}
        this.app = app
    }

    add(config: PluginConfig) {
        this.map[config.name] = {
            isInit: false,
            ...config
        }
    }

    run() {
        const keys = Object.keys(this.map)
        const length = keys.length

        if (length > 0) {
            keys.forEach((key) => {
                const config = this.map[key]
                if (config.isInit) {
                    return
                }

                this.register(config)
            })
        }
    }

    private register(config: MapNode) {
        if (config.deps && config.deps.length > 0) {
            config.deps.forEach((key) => {
                if (this.map.hasOwnProperty(key)) {
                    const next = this.map[key]
                    if (!next.isInit) {
                        this.register(next)
                    }
                } else {
                    console.error('Could not found this dependence: ' + key)
                }
            })
        }

        config.init(this.app)
        config.isInit = true
    }
}
