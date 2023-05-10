/**
 * @description: 开发模式
 */
export function isDevMode(): boolean {
    return import.meta.env.DEV
}

/**
 * @description: 生成模式
 */
export function isProdMode(): boolean {
    return import.meta.env.PROD
}

/**
 * 检查是否是微信小程序的开发版或体验版
 */
export function isWechatDevMode(): boolean {
    if (typeof wx !== 'undefined' && typeof wx.getAccountInfoSync === 'function') {
        const env = wx.getAccountInfoSync()

        return enc?.miniProgram?.envVersion === 'develop' || enc?.miniProgram?.envVersion === 'trial'
    }

    return false
}
