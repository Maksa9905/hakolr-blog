import { getPostsFx } from '#store/posts/effects.js'
import { PageContextClient } from 'vike/types'

export const data = async (pageContext: PageContextClient) => {
  const searchParams = pageContext.urlParsed.search
  const cookies = pageContext?.headers?.cookie

  const response = await getPostsFx({ pagination: searchParams, cookies })

  return response
}
