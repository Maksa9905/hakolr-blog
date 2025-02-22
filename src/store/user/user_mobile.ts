import { createStore, fork, sample } from 'effector'
import {
  defaultUserFollowersValues,
  defaultUserPostsValues,
} from './defaultValues'
import { DEFAULT_PAGINATION } from '#shared/lib/consts.js'
import {
  get_followers_more,
  get_posts_more,
  setFollowers,
  setPosts,
  set_has_followers_more,
  set_has_posts_more,
} from './events'
import { getMobileFollowersFx, getMobilePostsFx } from './effects'
import { $user } from './user'
import { mapPost } from '#entities/posts/index.js'

export const $user_posts_mobile = createStore(defaultUserPostsValues)
export const $user_followers_mobile = createStore(defaultUserFollowersValues)

export const $has_posts_more = createStore(false)
export const $has_followers_more = createStore(false)

export const $user_posts_pagination_mobile = createStore(DEFAULT_PAGINATION)
export const $user_followers_pagination_mobile = createStore(DEFAULT_PAGINATION)

$user_posts_mobile.on(setPosts, (_, posts) => posts)
$user_followers_mobile.on(setFollowers, (_, followers) => followers)

sample({
  clock: get_posts_more,
  source: { $user, $user_posts_pagination_mobile },
  fn: ({ $user, $user_posts_pagination_mobile }) => ({
    userId: $user._id,
    pagination: {
      ...$user_posts_pagination_mobile,
      page: $user_posts_pagination_mobile.page + 1,
    },
    cookies: document.cookie,
  }),
  target: getMobilePostsFx,
})

sample({
  clock: get_followers_more,
  source: { $user, $user_followers_pagination_mobile },
  fn: ({ $user, $user_followers_pagination_mobile }) => ({
    userId: $user._id,
    pagination: {
      ...$user_posts_pagination_mobile,
      page: $user_followers_pagination_mobile.page + 1,
    },
    cookies: document.cookie,
  }),
  target: getMobileFollowersFx,
})

$user_posts_pagination_mobile.on(
  getMobilePostsFx,
  (prev_pagination, { pagination }) => ({
    ...prev_pagination,
    ...pagination,
  }),
)

$user_followers_pagination_mobile.on(
  getMobileFollowersFx,
  (prev_pagination, { pagination }) => ({
    ...prev_pagination,
    ...pagination,
  }),
)

sample({
  clock: getMobilePostsFx.doneData,
  source: $user_posts_mobile,
  fn: (posts, { data, total }) => posts.length + data.length < total,
  target: $has_posts_more,
})

sample({
  clock: getMobileFollowersFx.doneData,
  source: $user_followers_mobile,
  fn: (followers, { total, data }) => followers.length + data.length < total,
  target: $has_followers_more,
})

sample({
  clock: getMobilePostsFx.doneData,
  source: $user_posts_mobile,
  fn: (prev_posts, posts) => [...prev_posts, ...posts.data.map(mapPost)],
  target: $user_posts_mobile,
})

sample({
  clock: getMobileFollowersFx.doneData,
  source: $user_followers_mobile,
  fn: (prev_followers, followers) => [...prev_followers, ...followers.data],
  target: $user_followers_mobile,
})

$has_followers_more.on(set_has_followers_more, (_, has_more) => has_more)
$has_posts_more.on(set_has_posts_more, (_, has_more) => has_more)
