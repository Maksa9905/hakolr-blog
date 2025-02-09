import { Posts } from '#entities/posts'
import {
  DEFAULT_LIMIT_PAGINATION,
  DEFAULT_PAGE_PAGINATION,
  DEFAULT_TOTAL_PAGINATION,
} from '#shared/lib/consts.js'

export const defaultPosts: Posts = {
  data: [],
  limit: DEFAULT_LIMIT_PAGINATION,
  page: DEFAULT_PAGE_PAGINATION,
  total: DEFAULT_TOTAL_PAGINATION,
}
