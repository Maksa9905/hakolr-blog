import { getPosts } from '#entities/posts/api'
import { PageContextClient } from 'vike/types'

export const data = async (pageContext: PageContextClient) => {
  const searchParams = pageContext.urlParsed.search

  const response = await getPosts({
    page: +searchParams.page,
    limit: +searchParams.limit,
  })

  return response
}
