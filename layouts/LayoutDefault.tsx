import './style.css'

import React from 'react'
import { Header } from '#widgets/Header'
import { AsideMenu, AsideMenuConfigItem } from '#widgets/AsideMenu'
import { useUnit } from 'effector-react'
import { $isOpen } from '#store/aside-menu/aside-menu.js'

export default function LayoutDefault({
  children,
}: {
  children: React.ReactNode
}) {
  const asideMenuConfig: AsideMenuConfigItem[] = [
    {
      title: 'Выйти',
      onClick: () => {
        document.cookie = 'Authorization=;'
      },
      path: '/login',
    },
  ]

  const isOpen = useUnit($isOpen)

  return (
    <>
      <Header />
      {children}
      <AsideMenu
        asideMenuConfig={asideMenuConfig}
        open={isOpen}
      />
    </>
  )
}
