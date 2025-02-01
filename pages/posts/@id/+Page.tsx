import { DetailPostResponse } from '#entities/posts/api'
import { PostPage } from '#pages/PostPage'
import { PageContainer } from '#shared/ui'
import { setPost } from '#store/post'
import { useData } from 'vike-react/useData'

export const Page = () => {
  const data = useData<DetailPostResponse>()

  setPost(data)

  return (
    <PageContainer>
      <PostPage />
    </PageContainer>
  )
}
