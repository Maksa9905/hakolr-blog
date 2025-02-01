import { useCallback, useEffect, useState } from 'react'
import styles from './Header.module.css'
import { IconButton, Link } from '#shared/ui'
import { JSIcon, MenuIcon } from '#shared/icons'
import { getRandomColor } from '#shared/lib'
import { useUnit } from 'effector-react'
import { $isOpen, setIsOpen } from '#store/aside-menu'

export const Header = () => {
  const [color, setColor] = useState(getRandomColor())

  const isOpen = useUnit($isOpen)

  const handleClick = useCallback(() => {
    setIsOpen(!isOpen)
  }, [setIsOpen, isOpen])

  useEffect(() => {
    const interval = setInterval(() => {
      setColor(getRandomColor())
    }, 3000)
    return () => clearInterval(interval)
  })

  return (
    <header className={styles.header}>
      <div className={styles['header__inner']}>
        <Link href="/">
          <div className={styles.title}>
            <JSIcon
              size={34}
              color={color}
            />
            <h1
              className={styles.logotype}
              style={{ color: color }}
            >
              Hakolr-blog
            </h1>
          </div>
        </Link>
        <IconButton onClick={handleClick}>
          <MenuIcon
            size={20}
            color={color}
          />
        </IconButton>
      </div>
    </header>
  )
}
