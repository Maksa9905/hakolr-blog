import { UserInfoCard, UserPostList } from '#entities/users'
import { FollowersList } from '#entities/users'
import { useEffect, useState } from 'react'
import styles from './AuthorPage.module.css'
import { useMediaQuery } from 'use-media-query-react'

export const AuthorPage = () => {
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(true)
  }, [])

  const isMobile = useMediaQuery('(max-width: 768px)') && hydrated

  return (
    <div className={styles['author-page']}>
      <UserInfoCard className={styles['user-info']} />
      <UserPostList
        isMobile={isMobile}
        className={styles['post-list']}
      />
      <FollowersList isMobile={isMobile} />
    </div>
  )
}
