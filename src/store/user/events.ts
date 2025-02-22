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

export const get_posts_more = createEvent<string | undefined>()
export const get_followers_more = createEvent()

export const set_has_posts_more = createEvent<boolean>()
export const set_has_followers_more = createEvent<boolean>()
