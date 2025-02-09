import { DetailPostResponse, getPostById } from '#entities/posts'
import { getPostFx } from '#store/post/effects.js'
import { PageContext } from 'vike/types'

export interface PostPageData {
  data: DetailPostResponse
}

export const data = async (pageContext: PageContext) => {
  const postId = pageContext.routeParams.id
  const cookies = pageContext?.headers?.cookie

  const response = await getPostFx({ id: postId, cookies })

  return {
    data: response,
  }
}
