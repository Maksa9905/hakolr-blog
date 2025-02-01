import { getPosts } from '#entities/posts/api'
import { getCookies } from '#shared/lib/getCookies.js'
import { PageContextClient } from 'vike/types'

export const data = async (pageContext: PageContextClient) => {
  const searchParams = pageContext.urlParsed.search

  const cookies = getCookies(pageContext)

  const response = await getPosts({
    page: +searchParams.page,
    limit: +searchParams.limit,
  }, cookies)

  return response
}
