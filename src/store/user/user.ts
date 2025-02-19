import { createStore, sample } from 'effector'
import {
  defaultMyInfoValues,
  defaultUserFollowersValues,
  defaultUserPostsValues,
  defaultUserValues,
} from './defaultValues'
import {
  setFollowers,
  setFollowersPagination,
  setMyInfo,
  setPosts,
  setPostsPagination,
  setUser,
} from './events'
import {
  getFollowersFx,
  getMyInfoFx,
  getPostsFx,
  getUserFx,
  subscribeFx,
  unSubscribeFx,
} from './effects'
import { DEFAULT_PAGINATION } from '#shared/lib/consts.js'
import { mapPost } from '#entities/posts/index.js'
import { subscribe } from '#features/subscribe/api/api.js'
import { getCookies } from '#shared/lib/getCookies.js'

export const $user = createStore(defaultUserValues)
export const $user_posts = createStore(defaultUserPostsValues)
export const $user_followers = createStore(defaultUserFollowersValues)

export const $user_posts_pagination = createStore(DEFAULT_PAGINATION)
export const $user_followers_pagination = createStore(DEFAULT_PAGINATION)

export const $my_info = createStore(defaultMyInfoValues)

$user.on(setUser, (_, user) => user)
$user_posts.on(setPosts, (_, posts) => posts)
$user_followers.on(setFollowers, (_, followers) => followers)

$user.on(getUserFx.doneData, (_, user) => user)

$user_posts.on(getPostsFx.doneData, (_, { data, ...pagination }) =>
  data.map(mapPost),
)

$user_posts_pagination.on(
  getPostsFx.doneData,
  (_, { data, ...pagination }) => pagination,
)

$user_posts_pagination.on(setPostsPagination, (_, pagination) => pagination)

$user_followers.on(getFollowersFx.doneData, (_, { data }) => data)

$user_followers_pagination.on(
  getFollowersFx.doneData,
  (_, { data, ...pagination }) => pagination,
)

$user_followers_pagination.on(
  setFollowersPagination,
  (_, pagination) => pagination,
)

$my_info.on(getMyInfoFx.doneData, (_, user) => user)
$my_info.on(setMyInfo, (_, info) => info)

sample({
  clock: subscribeFx.doneData,
  source: $user,
  fn: (user, response) => ({
    userId: user._id,
    pagination: DEFAULT_PAGINATION,
    cookies: document.cookie,
  }),
  target: getFollowersFx,
})

sample({
  clock: unSubscribeFx.doneData,
  source: $user,
  fn: (user, response) => ({
    userId: user._id,
    pagination: DEFAULT_PAGINATION,
    cookies: document.cookie,
  }),
  target: getFollowersFx,
})

$user.on(subscribeFx.doneData, (state, user) => ({ ...state, followed: true }))
$user.on(unSubscribeFx.doneData, (state, user) => ({
  ...state,
  followed: false,
}))
