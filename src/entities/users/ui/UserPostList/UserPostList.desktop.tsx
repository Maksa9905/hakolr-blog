import { NotFound, Pagination, Paper } from '#shared/ui'
import { PostItem } from '#entities/posts'
import styles from './UserPostList.module.css'
import { useState } from 'react'
import { useUnit } from 'effector-react'
import { $user, $user_posts, $user_posts_pagination } from '#store/user/user.js'
import { setPostsPagination } from '#store/user/events.js'
import { getPostsFx } from '#store/user/effects.js'

export interface DesktopUserPostListProps {
  className?: string
}

export const DesktopUserPostList = ({
  className: propClassName,
}: DesktopUserPostListProps) => {
  const user = useUnit($user)
  const posts = useUnit($user_posts)
  const posts_pagination = useUnit($user_posts_pagination)

  const className = `${styles['user-post-list']} ${propClassName}`

  const handleChangePage = (page: number) => {
    getPostsFx({
      userId: user._id,
      pagination: { page },
      cookies: document.cookie,
    })
  }

  return (
    <>
      <Paper className={className}>
        <h2 className={styles['title']}>Список постов</h2>
        <div className={styles['user-post-list__inner']}>
          {posts.length ? (
            posts.map((el) => (
              <>
                <PostItem
                  className={styles['user-post-item']}
                  withAuthorName={false}
                  {...el}
                />
                <hr className={styles['separator']} />
              </>
            ))
          ) : (
            <NotFound label={'Посты не найдены'} />
          )}
        </div>
        <Pagination
          className={styles['pagination']}
          onChange={handleChangePage}
          {...posts_pagination}
        />
      </Paper>
    </>
  )
}
