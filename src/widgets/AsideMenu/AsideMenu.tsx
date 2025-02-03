import { AsideMenuItem } from './AsideMenuItem'
import { AsideMenuConfigItem } from './AsideMenuTypes'
import styles from './AsideMenu.module.css'
import { useCallback, useEffect, useState } from 'react'

export interface AsideMenuProps {
  asideMenuConfig: AsideMenuConfigItem[]
  open: boolean
}

export const AsideMenu = ({ asideMenuConfig, open }: AsideMenuProps) => {
  return (
    <div className={`${styles['menu']} ${!open && styles['closed']}`}>
      {asideMenuConfig.map((item) => (
        <AsideMenuItem {...item} />
      ))}
    </div>
  )
}
