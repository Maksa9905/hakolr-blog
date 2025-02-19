import './style.css'
import React, { useEffect, useState } from 'react'
import { Header } from '#widgets/Header'
import { AsideMenu, AsideMenuConfigItem } from '#widgets/AsideMenu'
import { useUnit } from 'effector-react'
import { $isOpen, setIsOpen } from '#store/aside-menu/aside-menu.js'
import { navigate } from 'vike/client/router'
import { NEW_POST_ID } from '#shared/lib/consts.js'
import { $my_info } from '#store/user/user.js'
import { redirect } from 'vike/abort'
import { getMyInfoFx } from '#store/user/effects.js'

export default function LayoutDefault({
  children,
}: {
  children: React.ReactNode
}) {
  const [hydrated, setHidrated] = useState(false)

  useEffect(() => setHidrated(true), [])

  const asideMenuConfig: AsideMenuConfigItem[] = [
    {
      title: 'Выйти',
      onClick: () => {
        document.cookie = 'Authorization=;'
        setIsOpen(false)
      },
      path: '/login',
    },
    {
      title: 'Новый пост +',
      path: `/posts/${NEW_POST_ID}`,
    },
    {
      title: 'Мой профиль',
      onClick: async () => {
        const userInfo = await getMyInfoFx(document.cookie)
        navigate(`/user/${userInfo._id}`)
        setIsOpen(false)
      },
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
