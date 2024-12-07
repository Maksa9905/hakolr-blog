import { EyeIcon } from '#shared/icons'
import { PageHeaderProps } from '../model/types'
import styles from './PostHeader.module.css'

export const PostHeader = ({ title, description, date }: PageHeaderProps) => {
  return (
    <div className={styles['post-header']}>
      <h2 className={styles['title']}>{title}</h2>
      <p className={styles['description']}>{description}</p>
      <p className={styles['date']}>{new Date(date).toLocaleDateString()}</p>
      <p className={styles['views']}>
        <EyeIcon
          color="var(--grey5)"
          size={20}
        />{' '}
        20
      </p>
    </div>
  )
}
