import styles from './NewPostPage.module.css'
import { NewPostForm } from '#entities/posts'

export const NewPostPage = () => {
  return (
    <div className={styles['new-post-page']}>
      <NewPostForm />
    </div>
  )
}
