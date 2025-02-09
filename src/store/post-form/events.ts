import { PostForm, PostFormLabels } from '#entities/posts'
import { createEvent } from 'effector'

export const setValue = createEvent<Partial<PostForm>>()
export const changeHTMLFieldState = createEvent<void>()
export const setLabels = createEvent<PostFormLabels>()
