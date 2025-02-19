import {
  get_followers,
  get_posts,
  get_user,
  get_user_info,
  login,
} from '#entities/users/index.js'
import { subscribe, unsubscribe } from '#features/subscribe/api/api.js'
import { getCookies } from '#shared/lib/getCookies.js'
import { PaginationType } from '#shared/model/types.js'
import { createEffect } from 'effector'

export const getUserFx = createEffect(
  async ({ userId, cookies }: { userId: string; cookies?: string }) => {
    return await get_user(userId, getCookies(cookies))
  },
)

export const getPostsFx = createEffect(
  async (params: {
    userId: string
    pagination?: Partial<PaginationType>
    cookies?: string
  }) => {
    return await get_posts(
      params.userId,
      params.pagination,
      getCookies(params.cookies),
    )
  },
)

export const getFollowersFx = createEffect(
  async (params: {
    userId: string
    pagination?: Partial<PaginationType>
    cookies?: string
  }) => {
    return await get_followers(
      params.userId,
      params.pagination,
      getCookies(params.cookies),
    )
  },
)

export const getMyInfoFx = createEffect(async (cookies?: string) => {
  return await get_user_info(getCookies(cookies))
})

export const subscribeFx = createEffect(
  async (params: { userId: string; cookies?: string }) => {
    return await subscribe(params.userId, getCookies(params.cookies))
  },
)

export const unSubscribeFx = createEffect(
  async (params: { userId: string; cookies?: string }) => {
    return await unsubscribe(params.userId, getCookies(params.cookies))
  },
)
