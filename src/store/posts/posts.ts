import { Posts } from '#entities/posts/index.js'
import { createEvent, createStore } from 'effector'
import { defaultValues } from './defaultValues'

export const $posts = createStore(defaultValues, { sid: 'posts' })

export const setPosts = createEvent<Posts>()

$posts.on(setPosts, (_, posts) => {
  return posts
})
