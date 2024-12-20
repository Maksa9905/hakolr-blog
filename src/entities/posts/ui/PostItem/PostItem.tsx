import { LikeIcon } from '#shared/icons'
import { IconButton, Link } from '#shared/ui'
import { useState } from 'react'
import styles from './PostItem.module.css'
import { PostAction } from '../../model/types'

type Props = {
  title: string
  description: string
  date: string
  views: number
  likes: number
  dislikes: number
  authorId: string
  authorName: string
  _id: string
}

export const PostItem = ({
  title,
  description,
  date,
  views,
  likes,
  dislikes,
  authorName,
  authorId,
  _id,
}: Props) => {
  const [action, setAction] = useState(PostAction.IDE)

  const handleLikeClick = () => {
    setAction((action) => {
      if (action === PostAction.LIKE) {
        return PostAction.IDE
      }
      return PostAction.LIKE
    })
  }

  const handleDisLikeClick = () => {
    setAction((action) => {
      if (action === PostAction.DISLIKE) {
        return PostAction.IDE
      }
      return PostAction.DISLIKE
    })
  }

  return (
    <div className={styles.post}>
      <h3 className={styles.title}>
        <Link href={'/posts/' + _id}>{title}</Link> -{' '}
        <Link href={'/user/' + authorId}>{authorName}</Link>
      </h3>
      <p className={styles.content}>{description}</p>
      <p className={styles.date}>{new Date(date).toLocaleDateString()}</p>
      <p className={styles.views}>{views} просмотров</p>
      <div className={styles.actions}>
        <IconButton
          className={styles.likeButton}
          onClick={handleLikeClick}
        >
          <LikeIcon
            selected={action === PostAction.LIKE}
            color={'var(--grey4)'}
          />
        </IconButton>
        <IconButton
          className={styles.likeButton}
          onClick={handleDisLikeClick}
        >
          <LikeIcon
            selected={action === PostAction.DISLIKE}
            rotate
            color={'var(--grey4)'}
          />
        </IconButton>
        <span>
          {likes}/{dislikes}
        </span>
      </div>
    </div>
  )
}
