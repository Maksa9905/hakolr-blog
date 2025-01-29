import { Post } from '#entities/posts'
import { createEvent, createStore } from 'effector'

const defaultPost: Post = {
  _id: '',
  title: '',
  description: '',
  content: '',
  date: '',
  views: 0,
  likes: 0,
  dislikes: 0,
  authorId: '',
  authorName: '',
}

export const $post = createStore(defaultPost)

export const setPost = createEvent<Post>()

$post.on(setPost, (_, post) => post)
