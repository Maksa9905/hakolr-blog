import { AsideMenuConfigItem } from './AsideMenuTypes'
import styles from './AsideMenu.module.css'
import { useCallback } from 'react'
import { navigate } from 'vike/client/router'

export const AsideMenuItem = (props: AsideMenuConfigItem) => {
  const handleClick = useCallback(() => {
    props.onClick?.()
    props.path && navigate(props.path)
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
