import { Button, Paper } from '#shared/ui'
import { useCallback } from 'react'
import { UserListItem } from '../UserListItem'
import styles from './FollowersList.module.css'
import { useUnit } from 'effector-react'
import {
  $has_followers_more,
  $user_followers_mobile,
} from '#store/user/user_mobile.js'
import { get_followers_more } from '#store/user/events.js'

export interface MobileFollowersListProps {
  className?: string
}

export const MobileFollowersList = ({
  className: propClassName,
}: MobileFollowersListProps) => {
  const followers = useUnit($user_followers_mobile)
  const has_more = useUnit($has_followers_more)

  const className = `${styles['followers-list']} ${propClassName || ''}`

  const handleUploadPosts = useCallback(() => {
    get_followers_more()
  }, [])

  return (
    <Paper className={className}>
      <h2 className={styles['title']}>Подписчики</h2>
      <div className={styles['followers-list__inner']}>
        {followers.map((follower) => (
          <>
            <UserListItem
              {...follower}
              key={follower._id}
            />
            <hr className={styles['separator']} />
          </>
        ))}
      </div>
      {has_more && (
        <Button
          label="Показать еще..."
          onClick={handleUploadPosts}
          className={styles['show-more-button']}
        />
      )}
    </Paper>
  )
}
