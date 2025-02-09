import { ShortPostResponse } from '#entities/posts/api'
import { mapPost } from '#entities/posts/index.js'
import { HomePage } from '#pages/HomePage/ui'
import { WithPagination } from '#shared/model'
import { PageContainer } from '#shared/ui/index.js'
import { setPagination } from '#store/pagination'
import { setPosts } from '#store/posts'
import { useData } from 'vike-react/useData'

export default function Page() {
  const data: WithPagination<ShortPostResponse[]> = useData()

  const pagination = { page: data.page, limit: data.limit, total: data.total }

  setPosts({ ...pagination, data: data.data.map(mapPost) })
  setPagination(pagination)

  return (
    <PageContainer>
      <HomePage />
    </PageContainer>
  )
}
