import { PageContainer } from '#shared/ui/index.js'
import { TextField, Button } from '#shared/ui'
import { useCallback } from 'react'
import styles from './LoginPage.module.css'
import { HakolrBlogIcon } from '#shared/icons/HakolrBlogIcon'
import { login } from '#entities/users'

export const LoginPage = () => {
  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      login({
        email: event.currentTarget.email.value,
        password: event.currentTarget.password.value,
      })
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
        />
        <Button label="Войти" />
      </form>
    </div>
  )
}
