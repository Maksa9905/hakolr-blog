import { useUnit } from 'effector-react'
import { PostItem } from '../PostItem/PostItem'
import styles from './PostList.module.css'
import { $posts } from '#store/posts'

export const PostList = () => {
  const posts = useUnit($posts)

  return (
    <div className={styles.postlist}>
      {posts.map(({ author, ...post }) => (
        <PostItem
          {...post}
          authorName={author.name}
          statistics={post.reactions}
          authorId={author._id}
          reactions={post.reactions.reactions}
        />
      ))}
    </div>
  )
}
