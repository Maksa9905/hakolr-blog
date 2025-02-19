import { NotFound, Pagination, Paper } from '#shared/ui'
import { useCallback, useState } from 'react'
import { UserListItem } from '../UserListItem'
import styles from './FollowersList.module.css'
import { useUnit } from 'effector-react'
import {
  $user,
  $user_followers,
  $user_followers_pagination,
} from '#store/user/user.js'
import { getFollowersFx } from '#store/user/effects.js'

export interface DesktopFollowersListProps {
  className?: string
}

export const DesktopFollowersList = ({
  className: propClassName,
}: DesktopFollowersListProps) => {
  const user = useUnit($user)
  const followers = useUnit($user_followers)
  const pagination = useUnit($user_followers_pagination)

  const handleChangePage = useCallback((page: number) => {
    getFollowersFx({
      userId: user._id,
      pagination: { page },
      cookies: document.cookie,
    })
  }, [])

  const className = `${styles['followers-list']}${propClassName || ''}`

  return (
    <Paper className={className}>
      <h2 className={styles['title']}>Подписчики</h2>
      {followers.length ? (
        <div className={styles['followers-list__inner']}>
          {followers.map((el) => (
            <>
              <UserListItem
                key={el._id}
                userId={el._id}
                {...el}
              />
              <hr className={styles['separator']} />
            </>
          ))}
        </div>
      ) : (
        <NotFound label="Подписчики не найдены" />
      )}
      <Pagination
        className={styles['pagination']}
        onChange={handleChangePage}
        {...pagination}
      />
    </Paper>
  )
}
