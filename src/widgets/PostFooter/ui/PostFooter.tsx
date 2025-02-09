import { Link, Paper } from '#shared/ui'
import { $post } from '#store/post'
import { useUnit } from 'effector-react'
import styles from './PostFooter.module.css'

export const PostFooter = () => {
  const { authorId, authorName } = useUnit($post)

  return (
    <Paper className={styles['post-footer-conainer']}>
      <h2 className={styles['title']}>Понравилась статья?</h2>
      <Link
        className={styles['author']}
        href={authorId}
      >
        {authorName}
      </Link>
      <a className={styles['description']}>
        Подпишитесь на автора, чтобы не пропустить новые статьи!
      </a>
    </Paper>
  )
}
