import { Button, Paper } from '#shared/ui'
import { PostItem } from '#entities/posts'
import styles from './UserPostList.module.css'
import { useCallback } from 'react'
import { useUnit } from 'effector-react'
import { $has_posts_more, $user_posts_mobile } from '#store/user/user_mobile.js'
import { get_posts_more } from '#store/user/events.js'

export interface MobileUserPostListProps {
  className?: string
}

export const MobileUserPostList = ({
  className: propClassName,
}: MobileUserPostListProps) => {
  const posts = useUnit($user_posts_mobile)
  const has_more = useUnit($has_posts_more)

  console.log(posts)

  const handleUploadPosts = useCallback(() => {
    get_posts_more()
  }, [])

  const className = `${styles['user-post-list']} ${propClassName || ''}`

  return (
    <>
      <Paper className={className}>
        <h2 className={styles['title']}>Список постов</h2>
        <div className={styles['user-post-list__inner']}>
          {posts.map((post) => (
            <>
              <PostItem
                className={styles['user-post-item']}
                withAuthorName={false}
                {...post}
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
    </>
  )
}
