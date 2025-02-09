import {
  DetailPostResponse,
  PostFormLabelsResponse,
  getPostById,
} from '#entities/posts'
import { getCookies } from '#shared/lib/getCookies.js'
import { PageContext } from 'vike/types'

export interface PostPageData {
  data: DetailPostResponse
}

export const data = async (pageContext: PageContext) => {
  const postId = pageContext.routeParams.id
  const cookies = pageContext?.headers?.cookie

  const response = await getPostById(postId, getCookies(cookies))

  return {
    data: response,
  }
}
