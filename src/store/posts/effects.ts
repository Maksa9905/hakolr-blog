import { getPosts } from '#entities/posts'
import { getCookies } from '#shared/lib/getCookies.js'
import { PaginationType } from '#shared/model/types.js'
import { createEffect } from 'effector'

export const getPostsFx = createEffect(
  async (params: { pagination: Partial<PaginationType>; cookies?: string }) => {
    const { pagination, cookies } = params

    return await getPosts(pagination, getCookies(cookies))
  },
)
