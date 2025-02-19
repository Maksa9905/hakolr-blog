import { AsideMenuConfigItem } from './AsideMenuTypes'
import styles from './AsideMenu.module.css'
import { useCallback } from 'react'
import { navigate } from 'vike/client/router'
import { setIsOpen } from '#store/aside-menu/aside-menu.js'

export const AsideMenuItem = (props: AsideMenuConfigItem) => {
  const handleClick = useCallback(() => {
    props.onClick?.()
    props.path && navigate(props.path)
    setIsOpen(false)
  }, [props.onClick, props.path, navigate])

  return (
    <div
      onClick={handleClick}
      className={styles['menu-item']}
    >
      {props.title}
    </div>
  )
}
