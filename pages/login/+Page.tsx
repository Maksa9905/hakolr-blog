import { LoginPage } from '#pages/LoginPage'
import { PageContainer } from '#shared/ui'

export const Page = () => {
  return (
    <PageContainer withHeader={false}>
      <LoginPage />
    </PageContainer>
  )
}
