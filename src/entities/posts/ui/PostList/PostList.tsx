import { useUnit } from 'effector-react'
import { PostItem } from '../PostItem/PostItem'
import styles from './PostList.module.css'
import { $posts } from '#store/posts'
import { Paper } from '#shared/ui/index.js'

export const PostList = () => {
  const { data: posts } = useUnit($posts)

  return (
    <div className={styles.postlist}>
      {posts.map((post) => (
        <Paper>
          <PostItem {...post} />
        </Paper>
      ))}
    </div>
  )
}
