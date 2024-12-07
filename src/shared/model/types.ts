export type PaginationType = { page: number; total: number; limit: number }

export type WithPagination<T> = {
  data: T
  total: number
  limit: number
  page: number
}

export type HTMLString = string
export type ISOString = string
