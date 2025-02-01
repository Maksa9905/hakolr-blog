import { getPostById } from '#entities/posts/api'
import { getCookies } from '#shared/lib/getCookies.js'
import { PageContextClient } from 'vike/types'

export const data = async (pageContext: PageContextClient) => {
  const postId = pageContext.routeParams.id
  const cookies = getCookies(pageContext)
 
  const response = await getPostById(postId, cookies)

  return response
}
