import styles from './PostContent.module.css'
import { contentParser } from '../model/contentParser'
import { $post } from '#store/post'
import { useUnit } from 'effector-react'

export const PostContent = () => {
  const { content } = useUnit($post)

  return (
    <div
      dangerouslySetInnerHTML={{ __html: contentParser(content) }}
      className={styles['post-content']}
    />
  )
}
