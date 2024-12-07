import { ShortPostResponse } from '#entities/posts/api'
import { HomePage } from '#pages/HomePage/ui'
import { WithPagination } from '#shared/model'
import { setPagination } from '#store/pagination'
import { setPosts } from '#store/posts'
import { useData } from 'vike-react/useData'

export default function Page() {
  const data: WithPagination<ShortPostResponse[]> = useData()

  const pagination = { page: data.page, limit: data.limit, total: data.total }

  setPosts(data.data)
  setPagination(pagination)

  return <HomePage />
}
