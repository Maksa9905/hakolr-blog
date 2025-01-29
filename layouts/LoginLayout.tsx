import { PageContainer } from '#shared/ui/index.js'
import './style.css'

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <PageContainer>{children}</PageContainer>
}
