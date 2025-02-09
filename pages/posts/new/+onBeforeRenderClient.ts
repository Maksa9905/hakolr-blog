import { PageContext } from 'vike/types'
import { NewPostPageData } from './+data'
import { setLabels } from '#store/post-form/events.js'

export const onBeforeRenderClient = (
  pageContext: PageContext<NewPostPageData>,
) => {
  const { labels } = pageContext.data

  setLabels(labels)
}
