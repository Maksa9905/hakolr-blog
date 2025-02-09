import { NewPostPage } from '#pages/NewPostPage'
import { PageContainer } from '#shared/ui'
import { setLabels } from '#store/post-form/events.js'
import { useData } from 'vike-react/useData'
import { NewPostPageData } from './+data'

export const Page = () => {
  const { labels } = useData<NewPostPageData>()

  setLabels(labels)

  return (
    <PageContainer>
      <NewPostPage />
    </PageContainer>
  )
}
