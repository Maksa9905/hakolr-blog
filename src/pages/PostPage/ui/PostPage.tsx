import { PageContainer } from '#shared/ui'
import { PostHeader } from '#widgets/PostHeader'
import { PostContent } from '#widgets/PostContent'
import { PostFooter } from '#widgets/PostFooter'

export const PostPage = () => {
  return (
    <PageContainer>
      <PostHeader />
      <PostContent />
      <PostFooter />
    </PageContainer>
  )
}
