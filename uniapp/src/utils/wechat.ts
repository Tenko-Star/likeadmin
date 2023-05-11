// @ts-nocheck

import weixin from 'weixin-js-sdk'
import { getWxCodeUrl, OALogin } from '@/api/account'
import { isAndroid } from './client'
import { wxJsConfig } from '@/api/app'

const checkMnpUpdate = async () => {
    if (typeof wx !== 'object') {
        return
    }

    if (wx.canIUse('getUpdateManager')) {
        const updateManager = wx.getUpdateManager()

        const needUpdate = await new Promise<boolean>((resolve) => {
            updateManager.onCheckForUpdate((res: { hasUpdate: boolean }) => {
                resolve(res.hasUpdate)
            })
        })

        if (needUpdate) {
            try {
                await new Promise<void>((resolve, reject) => {
                    updateManager.onUpdateReady(() => {
                        resolve()
                    })

                    updateManager.onUpdateFailed(() => {
                        reject()
                    })
                })
            } catch (e) {
                wx.showModal({
                    title: '已经有新版本了哟',
                    content: '新版本已经上线啦，请您删除当前小程序，重新搜索打开哟'
                })
                return
            }

            const isClickConfirm = await new Promise<boolean>((resolve) => {
                wx.showModal({
                    title: '更新提示',
                    content: '新版本已经准备好，是否重启应用？',
                    success: (res: { confirm: boolean }) => {
                        resolve(res.confirm)
                    }
                })
            })

            if (isClickConfirm) {
                updateManager.applyUpdate()
            } else {
                const isSecondClick = await new Promise<boolean>((resolve) => {
                    wx.showModal({
                        title: '温馨提示',
                        content: '本次版本更新涉及到新的功能添加，旧版本无法正常访问的哦',
                        success: (res: { confirm: boolean }) => {
                            resolve(res.confirm)
                        }
                    })
                })

                if (isSecondClick) {
                    updateManager.applyUpdate()
                } else {
                    checkMnpUpdate()
                }
            }
        }
    } else {
        wx.showModal({
            title: '提示',
            content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
        })
    }
}

const wechatOa = {
    getSignLink() {
        if (typeof window.signLink === 'undefined' || window.signLink === '') {
            window.signLink = location.href.split('#')[0]
        }
        return isAndroid() ? location.href.split('#')[0] : window.signLink
    },
    getUrl() {
        getWxCodeUrl().then((res) => {
            location.href = res.url
        })
    },
    config() {
        return new Promise((resolve, reject) => {
            wxJsConfig({
                url: this.getSignLink()
            }).then((res) => {
                weixin.config({
                    ...res,
                    success: () => {
                        resolve('success')
                    },
                    fail: (res: any) => {
                        reject('weixin config is fail')
                    }
                })
            })
        })
    },
    authLogin(code: string) {
        return new Promise((resolve, reject) => {
            OALogin({
                code
            })
                .then((res) => {
                    resolve(res)
                })
                .catch((err) => {
                    reject(err)
                })
        })
    },
    ready() {
        return new Promise((resolve) => {
            weixin.ready(() => {
                resolve('success')
            })
        })
    },
    pay(options: Record<any, any>) {
        return new Promise((resolve, reject) => {
            this.ready()
                .then(() => {
                    weixin.chooseWXPay({
                        timestamp: options.timeStamp,
                        nonceStr: options.nonceStr,
                        package: options.package,
                        signType: options.signType,
                        paySign: options.paySign,
                        success: (res: any) => {
                            if (res.errMsg === 'chooseWXPay:ok') {
                                resolve(res)
                            } else {
                                reject(res.errMsg)
                            }
                        },
                        cancel: (res: any) => {
                            reject(res)
                        },
                        fail: (res: any) => {
                            reject(res)
                        }
                    })
                })
                .catch((err) => {
                    reject(err)
                })
        })
    },
    share(options: Record<any, any>) {
        this.ready().then(() => {
            const { shareTitle, shareLink, shareImage, shareDesc } = options
            weixin.updateTimelineShareData({
                title: shareTitle, // 分享标题
                link: shareLink, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: shareImage // 分享图标
            })
            // 发送给好友
            weixin.updateAppMessageShareData({
                title: shareTitle, // 分享标题
                link: shareLink, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: shareImage, // 分享图标
                desc: shareDesc
            })
            // 发送到tx微博
            weixin.onMenuShareWeibo({
                title: shareTitle, // 分享标题
                link: shareLink, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: shareImage, // 分享图标
                desc: shareDesc
            })
        })
    },
    getAddress() {
        return new Promise((reslove, reject) => {
            this.ready().then(() => {
                weixin.openAddress({
                    success: (res: any) => {
                        reslove(res)
                    },
                    fail: (res: any) => {
                        reject(res)
                    }
                })
            })
        })
    },
    getLocation() {
        return new Promise((reslove, reject) => {
            this.ready().then(() => {
                weixin.getLocation({
                    type: 'gcj02',
                    success: (res: any) => {
                        reslove(res)
                    },
                    fail: (res: any) => {
                        reject(res)
                    }
                })
            })
        })
    },
    checkMnpUpdate
}

export default wechatOa
