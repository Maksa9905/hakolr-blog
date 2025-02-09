import { EyeIcon } from '#shared/icons'
import { useUnit } from 'effector-react'
import styles from './PostHeader.module.css'
import { $post } from '#store/post'
import { Paper } from '#shared/ui'

export const PostHeader = () => {
  const { title, description, date, views } = useUnit($post)

  return (
    <Paper className={styles['post-header']}>
      <h2 className={styles['title']}>{title}</h2>
      <p className={styles['description']}>{description}</p>
      <p className={styles['date']}>{new Date(date).toLocaleDateString()}</p>
      <p className={styles['views']}>
        <EyeIcon
          color="var(--grey5)"
          size={20}
        />{' '}
        {views}
      </p>
    </Paper>
  )
}
