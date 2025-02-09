import {
  DetailPostResponse,
  PostFormLabelsResponse,
  getPostFormLabels,
} from '#entities/posts'
import { getCookies } from '#shared/lib/getCookies.js'
import { PageContext } from 'vike/types'

export interface NewPostPageData {
  labels: PostFormLabelsResponse
}

export const data = async (pageContext: PageContext) => {
  const cookies = pageContext?.headers?.cookie

  const response = await getPostFormLabels(getCookies(cookies))

  return {
    labels: response.data,
  }
}
