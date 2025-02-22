import { createStore, sample } from 'effector'
import { defaultValues } from './defaultValues'
import {
  changedEmail,
  changedName,
  changedPassword,
  changedRepeatedPassword,
  register,
  resetForm,
} from './events'
import { registerFx } from './effects'

export const $register_form = createStore(defaultValues)
export const $is_submit_button_disabled = createStore(true)

$register_form.on(changedEmail, (state, email) => ({ ...state, email }))
$register_form.on(changedRepeatedPassword, (state, repeatedPassword) => ({
  ...state,
  repeatedPassword,
}))
$register_form.on(changedName, (state, name) => ({ ...state, name }))
$register_form.on(changedPassword, (state, password) => ({
  ...state,
  password,
}))

$register_form.on(resetForm, () => defaultValues)

sample({
  clock: $register_form,
  fn: (state) =>
    !Boolean(
      state.password === state.repeatedPassword &&
        state.email &&
        state.password &&
        state.name,
    ),
  target: $is_submit_button_disabled,
})

sample({
  clock: register,
  source: $register_form,
  fn: ({ repeatedPassword, ...form }) => form,
  target: registerFx,
})
