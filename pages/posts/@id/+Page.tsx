import { DetailPostResponse } from '#entities/posts/api'
import { PostPage } from '#pages/PostPage'
import { useData } from 'vike-react/useData'

export const Page = () => {
  const data = useData<DetailPostResponse>()

  return <PostPage {...data} />
}
