import styles from './PostContent.module.css'
import { $post } from '#store/post'
import { useUnit } from 'effector-react'
import { Paper } from '#shared/ui'
import { contentParser } from '#entities/posts'

export const PostContent = () => {
  const { content } = useUnit($post)

  return (
    <Paper className={styles['post-content']}>
      <div dangerouslySetInnerHTML={{ __html: contentParser(content) }} />
    </Paper>
  )
}
