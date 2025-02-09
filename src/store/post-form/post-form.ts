import { HtmlFieldStates } from '#entities/posts'
import { createStore, sample } from 'effector'
import { defaultPostForm } from './defaultValues'
import { changeHTMLFieldState, setValue, setLabels } from './events'

export const $postForm = createStore(defaultPostForm, { sid: 'postForm' })

$postForm.on(changeHTMLFieldState, (postForm) => ({
  ...postForm,
  HTMLFieldState: postForm.HTMLFieldState === 'INPUT' ? 'VIEW' : 'INPUT',
}))

$postForm.on(setValue, (postForm, values) => ({ ...postForm, ...values }))

$postForm.on(setLabels, (postForm, labels) => ({ ...postForm, labels }))
