import { DEFAULT_LIMIT_PAGINATION, DEFAULT_PAGE_PAGINATION } from '#shared/lib'
import { PaginationType, WithPagination } from '#shared/model'
import axios from 'axios'
import { DetailPostResponse, ShortPostResponse } from './types'

export const getPosts = async (searchParams: Partial<PaginationType>) => {
  const response = await axios.get<WithPagination<ShortPostResponse[]>>(
    'http://localhost:3001/posts',
    {
      params: {
        page: searchParams.page || DEFAULT_PAGE_PAGINATION,
        limit: searchParams.limit || DEFAULT_LIMIT_PAGINATION,
      },
    },
  )

  return await response.data
}

export const getPostById = async (id: string) => {
  const response = await axios.get<DetailPostResponse>(
    `http://localhost:3001/posts/${id}`,
  )

  return await response.data
}
