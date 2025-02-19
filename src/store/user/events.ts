import { Post } from '#entities/posts'
import { DetailedUserResponse, UserById } from '#entities/users'
import { PaginationType } from '#shared/model/types.js'
import { createEvent } from 'effector'

export const setUser = createEvent<UserById>()
export const setPosts = createEvent<Post[]>()
export const setFollowers = createEvent<UserById[]>()

export const setPostsPagination = createEvent<PaginationType>()
export const setFollowersPagination = createEvent<PaginationType>()

export const setMyInfo = createEvent<DetailedUserResponse | null>()
