import { PageContext } from 'vike/types'
import { ShortPostResponse, mapDetailedPost, mapPost } from '#entities/posts'
import { setPosts } from '#store/posts/events.js'
import { WithPagination } from '#shared/model/types.js'

export const onBeforeRenderClient = (
  pageContext: PageContext<WithPagination<ShortPostResponse[]>>,
) => {
  const { data, page, limit, total } = pageContext.data

  setPosts({
    data: data.map(mapPost),
    page,
    limit,
    total,
  })
}
