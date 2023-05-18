/* eslint-disable */
export type IsSameTo<T, U, Y = unknown, N = never>
    = (<G>() => G extends T ? 1 : 2) extends
        (<G>() => G extends U ? 1 : 2) ? Y : N
/* eslint-enable */

type TureType = true

type FalseType = false

export type IsSame<T, U> = IsSameTo<T, U, TureType, FalseType>

export declare const exactType: <T, U>(
    draft: T & IsSameTo<T, U>,
    expected: U & IsSameTo<T, U>
) => IsSameTo<T, U>
