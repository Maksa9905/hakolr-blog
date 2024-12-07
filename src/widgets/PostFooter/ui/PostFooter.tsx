import { Link } from '#shared/ui'
import styles from './PostFooter.module.css'

export const PostFooter = ({
  authorId,
  authorName,
}: {
  authorId: string
  authorName: string
}) => {
  return (
    <div className={styles['post-footer-conainer']}>
      <h2 className={styles['title']}>Понравилась статья?</h2>
      <div className={styles['author']}>
        <p>
          <Link href={authorId}>{authorName}</Link>
        </p>
      </div>
      <a className={styles['description']}>
        Подпишитесь на автора, чтобы не пропустить новые статьи!
      </a>
    </div>
  )
}
