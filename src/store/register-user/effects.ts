import { create_user } from '#entities/users'
import { createEffect } from 'effector'
import { navigate } from 'vike/client/router'

export const registerFx = createEffect(
  async (body: { name: string; password: string; email: string }) => {
    try {
      await create_user(body)
      navigate('/login')
    } catch (error) {
      alert(error)
    }
  },
)
