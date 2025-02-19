import { Button, Paper } from '#shared/ui'
import { useCallback } from 'react'
import { UserListItem } from '../UserListItem'
import styles from './FollowersList.module.css'

export interface MobileFollowersListProps {
  className?: string
}

export const MobileFollowersList = ({
  className: propClassName,
}: MobileFollowersListProps) => {
  const className = `${styles['followers-list']} ${propClassName || ''}`

  const handleUploadPosts = useCallback(() => {}, [])

  return (
    <Paper className={className}>
      <h2 className={styles['title']}>Подписчики</h2>
      <div className={styles['followers-list__inner']}>
        {[...Array(5)].map((el) => (
          <>
            <UserListItem
              key={el}
              userId={'123'}
              name="John Doe"
              avatarUrl="https://i.imgur.com/1S2PiLC.png"
              status="
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi cupiditate quo quas quae culpa nobis obcaecati cumque! Distinctio sequi quia quos dolorum quibusdam, modi cumque sunt dignissimos, ratione in dicta ipsum iste doloribus est corrupti facere illo dolorem possimus."
            />
            <hr className={styles['separator']} />
          </>
        ))}
      </div>
      <Button
        label="Показать еще..."
        onClick={handleUploadPosts}
        className={styles['show-more-button']}
      />
    </Paper>
  )
}
