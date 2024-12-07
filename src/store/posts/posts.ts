import { ShortPostResponse } from '#entities/posts/api/types.js'
import { createEvent, createStore } from 'effector'

export const $posts = createStore([] as ShortPostResponse[])

export const setPosts = createEvent<ShortPostResponse[]>()

$posts.on(setPosts, (_, posts) => {
  return posts
})
