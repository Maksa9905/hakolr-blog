import { useUnit } from 'effector-react'
import { PostItem } from '../PostItem/PostItem'
import styles from './PostList.module.css'
import { $posts } from '#store/posts'

export const PostList = () => {
  const posts = useUnit($posts)

  console.log(posts)

  return (
    <div className={styles.postlist}>
      {posts.map((post) => (
        <PostItem {...post} />
      ))}
    </div>
  )
}
