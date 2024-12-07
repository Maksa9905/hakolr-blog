import './style.css'

import React from 'react'
import { Header } from '#widgets/Header'
import { Page } from '#shared/ui'

export default function LayoutDefault({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <Page>{children}</Page>
    </>
  )
}
