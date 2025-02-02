import { DetailPostResponse } from '#entities/posts/api'
import { PostPage } from '#pages/PostPage'
import { PageContainer } from '#shared/ui'
import { setPost } from '#store/post'
import { useData } from 'vike-react/useData'

export const Page = () => {
  const {
    reactions: { likes, dislikes, reactions },
    ...data
  } = useData<DetailPostResponse>()

  setPost({
    statistics: {
      likes,
      dislikes,
    },
    reactions,
    authorId: data.author._id,
    authorName: data.author.name,
    ...data,
  })

  return (
    <PageContainer>
      <PostPage />
    </PageContainer>
  )
}
