import { PostPage } from '#pages/PostPage'
import { PageContainer } from '#shared/ui'
import { useData } from 'vike-react/useData'
import { PostPageData } from './+data'
import { setPost } from '#store/post/events.js'
import { mapDetailedPost } from '#entities/posts/index.js'

export const Page = () => {
  const { data } = useData<PostPageData>()

  setPost(mapDetailedPost(data))

  return (
    <PageContainer>
      <PostPage />
    </PageContainer>
  )
}
