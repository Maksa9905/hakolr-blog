import { Posts } from '#entities/posts'
import { PaginationType } from '#shared/model'
import { createEvent } from 'effector'

export const setPosts = createEvent<Posts>()

export const setPagination = createEvent<Partial<PaginationType>>()
