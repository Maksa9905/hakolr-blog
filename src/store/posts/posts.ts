import { mapPost } from '#entities/posts'
import { createStore } from 'effector'
import { setPagination, setPosts } from './events'
import { getPostsFx } from './effects'
import { defaultPosts } from './defaultValues'
import {
  DEFAULT_LIMIT_PAGINATION,
  DEFAULT_PAGE_PAGINATION,
  DEFAULT_TOTAL_PAGINATION,
} from '#shared/lib/consts.js'

export const $posts = createStore(defaultPosts)

$posts.on(getPostsFx.doneData, (_, { data, page, limit, total }) => ({
  data: data.map(mapPost),
  page,
  limit,
  total,
}))

$posts.on(setPosts, (_, posts) => posts)

$posts.on(setPagination, (posts, pagination) => ({
  ...posts,
  page: pagination.page || DEFAULT_PAGE_PAGINATION,
  limit: pagination.limit || DEFAULT_LIMIT_PAGINATION,
  total: pagination.total || DEFAULT_TOTAL_PAGINATION,
}))
