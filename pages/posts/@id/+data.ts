import { getPostById } from '#entities/posts/api'
import { PageContextClient } from 'vike/types'

export const data = async (pageContext: PageContextClient) => {
  const postId = pageContext.routeParams.id

  const response = await getPostById(postId)

  return response
}
