import { createStore } from 'effector'
import { defaultPost } from './defaultValues'
import { getPostFx } from './effects'
import { setPost } from './events'

export const $post = createStore(defaultPost)

$post.on(getPostFx.doneData, (_, post) => {
  return {
    ...post,
    statistics: {
      likes: post.reactions.likes,
      dislikes: post.reactions.dislikes,
    },
    reactions: post.reactions.reactions,
    authorId: post.author._id,
    authorName: post.author.name,
  }
})

$post.on(setPost, (_, post) => post)
