import { PostHeader } from '#widgets/PostHeader'
import { PostContent } from '#widgets/PostContent'
import { PostFooter } from '#widgets/PostFooter'
import styles from './PostPage.module.css'
import { useEffect, useState } from 'react'

export const PostPage = () => {
  return (
    <div className={styles['post-page']}>
      <PostHeader />
      <PostContent />
      <PostFooter />
    </div>
  )
}
