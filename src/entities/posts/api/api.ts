import { DEFAULT_LIMIT_PAGINATION, DEFAULT_PAGE_PAGINATION } from '#shared/lib'
import { PaginationType, WithPagination } from '#shared/model'
import { DetailPostResponse, ShortPostResponse } from './types'
import RequestSender from '#app/api'

export const getPosts = async (
  searchParams: Partial<PaginationType>,
  cookies: Record<string, string>,
) => {
  const response = await RequestSender.send<
    WithPagination<ShortPostResponse[]>
  >({
    url: 'http://localhost:3001/api/posts',
    params: {
      page: searchParams.page || DEFAULT_PAGE_PAGINATION,
      limit: searchParams.limit || DEFAULT_LIMIT_PAGINATION,
    },
    headers: cookies,
  })

  return await response.data
}

export const getPostById = async (
  id: string,
  cookies: Record<string, string>,
) => {
  const response = await RequestSender.send<DetailPostResponse>({
    url: `http://localhost:3001/api/posts/${id}`,
    headers: cookies,
  })

  return await response.data
}
