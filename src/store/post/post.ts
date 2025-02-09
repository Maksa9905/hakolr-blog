import { createStore } from 'effector'
import { defaultPost } from './defaultValues'
import { setPost } from './events'

export const $post = createStore(defaultPost, { sid: 'post' })

$post.on(setPost, (_, post) => post)
