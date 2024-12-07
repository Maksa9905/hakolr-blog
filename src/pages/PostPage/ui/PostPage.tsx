import styles from './PostPage.module.css'
import { PageContainer } from '#shared/ui'
import { PostHeader } from '#widgets/PostHeader'
import { PostContent } from '#widgets/PostContent'
import { PostFooter } from '#widgets/PostFooter'

type Props = {
  content: string
  title: string
  description: string
  date: string
  authorId: string
  authorName: string
}

export const PostPage = ({
  content,
  title,
  description,
  date,
  authorId,
  authorName,
}: Props) => {
  return (
    <PageContainer>
      <PostHeader
        title={title}
        description={description}
        date={date}
      />
      <PostContent content={content} />
      <PostFooter
        authorId={authorId}
        authorName={authorName}
      />
    </PageContainer>
  )
}
