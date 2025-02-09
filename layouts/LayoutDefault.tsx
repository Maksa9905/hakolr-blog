import './style.css'

import React from 'react'
import { Header } from '#widgets/Header'
import { AsideMenu, AsideMenuConfigItem } from '#widgets/AsideMenu'
import { useUnit } from 'effector-react'
import { $isOpen } from '#store/aside-menu/aside-menu.js'
import { navigate } from 'vike/client/router'
import { NEW_POST_ID } from '#shared/lib/consts.js'

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
    {
      title: 'Новый пост +',
      path: `/posts/${NEW_POST_ID}`,
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
