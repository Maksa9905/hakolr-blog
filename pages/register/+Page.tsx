import { RegisterPage } from '#pages/RegisterPage'
import { PageContainer } from '#shared/ui'

export const Page = () => {
  return (
    <PageContainer withHeader={false}>
      <RegisterPage />
    </PageContainer>
  )
}
