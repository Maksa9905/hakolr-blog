import styles from './PostContent.module.css'
import { PostContentProps } from '../model/types'
import { contentParser } from '../model/contentParser'

export const PostContent = ({ content }: PostContentProps) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: contentParser(content) }}
      className={styles['post-content']}
    />
  )
}
