import { createStore } from 'effector'
import { defaultPostForm } from './defaultValues'
import { changeHTMLFieldState, setLabels, setValue } from './events'
import { getPostFormLabelsFx } from './effects'

export const $postForm = createStore(defaultPostForm)

$postForm.on(changeHTMLFieldState, (postForm) => ({
  ...postForm,
  HTMLFieldState: postForm.HTMLFieldState === 'INPUT' ? 'VIEW' : 'INPUT',
}))

$postForm.on(setValue, (postForm, values) => ({ ...postForm, ...values }))

$postForm.on(getPostFormLabelsFx.doneData, (postForm, labels) => ({
  ...postForm,
  labels,
}))

$postForm.on(setLabels, (postForm, labels) => ({ ...postForm, labels }))
