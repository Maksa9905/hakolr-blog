import './style.css'

import React from 'react'
import { Header } from '#widgets/Header'
import { PageContainer } from '#shared/ui'

export default function LayoutDefault({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <PageContainer>{children}</PageContainer>
    </>
  )
}
