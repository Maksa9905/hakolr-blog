import axios from 'axios'
import { AuthBodyDto, DetailedUserResponse } from './types'
import { PaginationType, WithPagination } from '#shared/model/types.js'
import { ShortPostResponse } from '#entities/posts/index.js'
import { User } from '../model'
import {
  DEFAULT_LIMIT_PAGINATION_S,
  DEFAULT_PAGE_PAGINATION,
} from '#shared/lib/consts.js'

export const login = async (body: AuthBodyDto) => {
  const response = await axios.post('http://localhost:3001/api/login', body, {
    withCredentials: true,
  })
}

export const verify_token = async (cookies?: Record<string, string>) => {
  try {
    const response = await axios.post(
      'http://localhost:3001/api/verify_token',
      {},
      { headers: cookies },
    )

    return response.status === 200
  } catch (error) {
    return false
  }
}

export const get_user_info = async (cookies?: Record<string, string>) => {
  const response = await axios.get<DetailedUserResponse>(
    'http://localhost:3001/api/user/info',
    {
      headers: cookies,
    },
  )

  return response.data
}

export const get_user = async (
  userId: string,
  cookies?: Record<string, string>,
) => {
  const response = await axios.get<DetailedUserResponse>(
    `http://localhost:3001/api/user/${userId}`,
    {
      headers: cookies,
    },
  )

  return response.data
}

export const get_followers = async (
  userId: string,
  params?: Partial<PaginationType>,
  cookies?: Record<string, string>,
) => {
  const response = await axios.get<WithPagination<User[]>>(
    `http://localhost:3001/api/user/${userId}/subscribers`,
    {
      headers: cookies,
      params: {
        page: params?.page || DEFAULT_PAGE_PAGINATION,
        limit: params?.limit || DEFAULT_LIMIT_PAGINATION_S,
      },
    },
  )

  return response.data
}

export const get_posts = async (
  userId: string,
  params?: Partial<PaginationType>,
  cookies?: Record<string, string>,
) => {
  const response = await axios.get<WithPagination<ShortPostResponse[]>>(
    `http://localhost:3001/api/posts`,
    {
      headers: cookies,
      params: {
        page: params?.page || DEFAULT_PAGE_PAGINATION,
        limit: params?.limit || DEFAULT_LIMIT_PAGINATION_S,
        authorId: userId,
      },
    },
  )

  return response.data
}
