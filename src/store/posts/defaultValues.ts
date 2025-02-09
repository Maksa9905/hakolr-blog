import { Posts } from '#entities/posts/index.js'
import {
  DEFAULT_LIMIT_PAGINATION,
  DEFAULT_PAGE_PAGINATION,
  DEFAULT_TOTAL_PAGINATION,
} from '#shared/lib/consts.js'

export const defaultValues: Posts = {
  limit: DEFAULT_LIMIT_PAGINATION,
  page: DEFAULT_PAGE_PAGINATION,
  total: DEFAULT_TOTAL_PAGINATION,
  data: [],
}
