import { DetailedPost } from '#entities/posts'
import { createEvent } from 'effector'

export const setPost = createEvent<DetailedPost>()
