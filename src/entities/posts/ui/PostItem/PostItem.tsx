import { Link, Paper } from '#shared/ui'
import { useCallback, useEffect, useState } from 'react'
import styles from './PostItem.module.css'
import {
  PostReactionsButton,
  Reaction,
  ReactionType,
} from '#entities/reactions'
import { add_reaction } from '#features/add-reaction/index.js'
import { getCookies } from '#shared/lib/getCookies.js'

type Props = {
  title: string
  description: string
  date: string
  views: number
  statistics: {
    likes: number
    dislikes: number
  }
  reaction: Reaction | null
  reactions: Reaction[]
  authorId: string
  authorName: string
  _id: string
}

export const PostItem = ({
  title,
  description,
  date,
  views,
  statistics,
  reaction,
  authorName,
  authorId,
  _id,
}: Props) => {
  const [action, setAction] = useState<ReactionType | null>(
    reaction?.type || null,
  )

  useEffect(() => {
    setAction(reaction?.type || null)
  }, [reaction])

  const handleActionClick = useCallback(
    async (value: ReactionType | null) => {
      setAction(value)
      const cookies = getCookies(document.cookie)
      await add_reaction(
        { postId: _id, type: value, _id: reaction?._id },
        cookies,
      )
    },
    [setAction],
  )

  return (
    <Paper className={styles.post}>
      <h3 className={styles.title}>
        <Link href={'/posts/' + _id}>{title}</Link> -{' '}
        <Link href={'/user/' + authorId}>{authorName}</Link>
      </h3>
      <p className={styles.content}>{description}</p>
      <p className={styles.date}>{new Date(date).toLocaleDateString()}</p>
      <p className={styles.views}>{views} просмотров</p>
      <PostReactionsButton
        value={action}
        onClick={handleActionClick}
        statisctics={statistics}
      />
    </Paper>
  )
}
