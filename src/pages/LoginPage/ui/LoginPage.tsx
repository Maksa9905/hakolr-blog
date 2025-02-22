import { TextField, Button, Link } from '#shared/ui'
import { useCallback } from 'react'
import styles from './LoginPage.module.css'
import { HakolrBlogIcon } from '#shared/icons/HakolrBlogIcon'
import { login } from '#entities/users'
import { redirect } from 'vike/abort'
import { navigate } from 'vike/client/router'

export const LoginPage = () => {
  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      try {
        await login({
          email: event.currentTarget.email.value,
          password: event.currentTarget.password.value,
        })

        navigate('/')
      } catch (error: any) {
        alert(error.message)
      }
    },
    [],
  )

  return (
    <div className={styles['login-page']}>
      <HakolrBlogIcon />
      <form
        onSubmit={handleSubmit}
        className={styles['login-form']}
      >
        <TextField
          name="email"
          label="Email"
        />
        <TextField
          name="password"
          label="Пароль"
          type="password"
        />
        <Button label="Войти" />
      </form>
      <Link
        className={styles['register-link']}
        href="/register"
      >
        Зарегистрироваться
      </Link>
    </div>
  )
}
