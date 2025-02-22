import { HakolrBlogIcon } from '#shared/icons/HakolrBlogIcon'
import { Button, Link, TextField } from '#shared/ui'
import { useCallback, useMemo } from 'react'
import styles from './RegisterPage.module.css'
import { create_user } from '#entities/users'
import { useUnit } from 'effector-react'
import { $is_submit_button_disabled } from '#store/register-user'
import {
  changedEmail,
  changedName,
  changedPassword,
  changedRepeatedPassword,
  register,
} from '#store/register-user/events.js'
import { navigate } from 'vike/client/router'
import { registerFx } from '#store/register-user/effects.js'

export const RegisterPage = () => {
  const submitButtonDisabled = useUnit($is_submit_button_disabled)

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      register()
    },
    [],
  )

  return (
    <div className={styles['register-page']}>
      <HakolrBlogIcon />
      <form
        onSubmit={handleSubmit}
        className={styles['register-form']}
      >
        <TextField
          name="name"
          label="Как вас зовут?"
          onChange={(e) => changedName(e.target.value)}
        />
        <TextField
          name="email"
          label="Введите свою почту"
          onChange={(e) => changedEmail(e.target.value)}
        />
        <TextField
          name="password"
          label="Пароль"
          type="password"
          autoComplete="new-password"
          onChange={(e) => changedPassword(e.target.value)}
        />
        <TextField
          name="password"
          label="Повторите пароль"
          type="password"
          autoComplete="new-password"
          onChange={(e) => changedRepeatedPassword(e.target.value)}
        />
        <Button
          disabled={submitButtonDisabled}
          label="Зарегистрироваться"
        />
      </form>
      <Link
        className={styles['login-link']}
        href="/login"
      >
        Уже есть аккаунт?
      </Link>
    </div>
  )
}
