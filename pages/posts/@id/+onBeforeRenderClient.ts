import { setPost } from '#store/post/events'
import { PageContext } from 'vike/types'
import { PostPageData } from './+data'
import { mapDetailedPost } from '#entities/posts'
import { setLabels } from '#store/post-form/events.js'

export const onBeforeRenderClient = (
  pageContext: PageContext<PostPageData>,
) => {
  const { data } = pageContext.data

  setPost(mapDetailedPost(data))
}
