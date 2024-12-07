import { DEFAULT_LIMIT_PAGINATION } from '#shared/lib/consts.js'
import { PaginationType } from '#shared/model'
import { createEvent, createStore } from 'effector'
import { navigate } from 'vike/client/router'

export const $pagination = createStore<PaginationType>({
  page: 1,
  limit: DEFAULT_LIMIT_PAGINATION,
  total: 0,
})

export const setPagination = createEvent<PaginationType>()

$pagination.on(setPagination, (_, pagination) => pagination)
