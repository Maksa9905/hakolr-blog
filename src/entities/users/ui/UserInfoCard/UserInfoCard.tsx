import { Button, Paper } from '#shared/ui/index.js'
import { useCallback, useMemo } from 'react'
import { Avatar } from '../Avatar'
import styles from './UserInfoCard.module.css'
import { PenIcon } from '#shared/icons'
import { useUnit } from 'effector-react'
import { $my_info, $user } from '#store/user/user.js'
import { SubscribeButton } from '#features/subscribe/index.js'

export interface UserInfoCardProps {
  className?: string
}

export const UserInfoCard = ({
  className: propClassName,
}: UserInfoCardProps) => {
  const className = `${styles['user-info-card']} ${propClassName || ''}`

  const data = useUnit($user)
  const my_info = useUnit($my_info)

  const isMyProfile = my_info?._id === data._id

  const buttons = useMemo(() => {
    if (isMyProfile)
      return (
        <Button
          className={styles['follow-button']}
          label="Редактировать профиль"
        />
      )
    return <SubscribeButton />
  }, [isMyProfile])

  return (
    <Paper className={className}>
      <Avatar
        src={data.avatarUrl}
        size="medium"
      />
      <h2 className={styles['name']}>{data.name}</h2>
      <p className={styles['status']}>{data.status}</p>
      {buttons}
    </Paper>
  )
}
