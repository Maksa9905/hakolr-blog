import { Button, Paper } from '#shared/ui'
import { PostItem } from '#entities/posts'
import styles from './UserPostList.module.css'
import { useCallback } from 'react'

export interface MobileUserPostListProps {
  className?: string
}

export const MobileUserPostList = ({
  className: propClassName,
}: MobileUserPostListProps) => {
  const post = {
    _id: '67b1b9c3ad95107b1a9834fe',
    title: 'Brevis basium curo aliquid crastinus curia absens.',
    description: 'Stips aegre catena deinde ipsa.',
    date: '2024-04-20T20:05:37.467Z',
    views: 883,
    __v: 0,
    author: {
      _id: '67b08bd7e028db0ffab4779a',
      email: 'Briana.Buckridge45@hotmail.com',
      name: 'Chasity_Schimmel',
      status: 'Solvo sol adficio.',
      followingIds: [],
      followerIds: [],
      __v: 0,
      avatarUrl: 'https://imgur.com/a/LZmusuN',
    },
    reaction: null,
    reactions: [],
    statistics: {
      likes: 0,
      dislikes: 0,
    },
    authorId: '67b08bd7e028db0ffab4779a',
    authorName: 'Chasity_Schimmel',
  }

  const handleUploadPosts = useCallback(() => {}, [])

  const className = `${styles['user-post-list']} ${propClassName || ''}`

  return (
    <>
      <Paper className={className}>
        <h2 className={styles['title']}>Список постов</h2>
        <div className={styles['user-post-list__inner']}>
          {[...Array(5)].map((el) => (
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
        <Button
          label="Показать еще..."
          onClick={handleUploadPosts}
          className={styles['show-more-button']}
        />
      </Paper>
    </>
  )
}
