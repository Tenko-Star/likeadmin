import 'vue-router'
declare module 'vue-router' {
  // 扩展 RouteMeta
  interface RouteMeta {
    title?: string
    icon?: string
    hidden?: boolean
  }
}

declare module 'vue3-video-play'
