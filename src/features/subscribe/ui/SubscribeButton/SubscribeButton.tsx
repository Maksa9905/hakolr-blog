import { Button } from '#shared/ui/index.js'
import { $user } from '#store/user/user.js'
import { useUnit } from 'effector-react'
import styles from './SubscribeButton.module.css'
import { useCallback, useState } from 'react'
import { subscribeFx, unSubscribeFx } from '#store/user/effects.js'

export const SubscribeButton = () => {
  const user = useUnit($user)

  const follow = useCallback(() => {
    subscribeFx({ userId: user._id, cookies: document.cookie })
  }, [])

  const unFollow = useCallback(() => {
    unSubscribeFx({ userId: user._id, cookies: document.cookie })
  }, [])

  if (!user.followed)
    return (
      <Button
        className={styles['follow-button']}
        onClick={follow}
        label="Подписаться"
      />
    )

  return (
    <Button
      className={styles['follow-button']}
      onClick={unFollow}
      label="Отписаться"
    />
  )
}
