import { getPostById } from '#entities/posts'
import { getCookies } from '#shared/lib/getCookies.js'
import { createEffect } from 'effector'

export const getPostFx = createEffect(
  async (params: { id: string; cookies?: string }) => {
    const { id, cookies } = params
    return await getPostById(id, getCookies(cookies))
  },
)
