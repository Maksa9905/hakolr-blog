import { useEffect, useState } from 'react'
import styles from './Header.module.css'
import { IconButton, Link } from '#shared/ui'
import { JSIcon, MenuIcon } from '#shared/icons'
import { getRandomColor } from '#shared/lib'

export const Header = () => {
  const [color, setColor] = useState(getRandomColor())

  useEffect(() => {
    const interval = setInterval(() => {
      setColor(getRandomColor())
    }, 3000)
    return () => clearInterval(interval)
  })

  return (
    <header className={styles.header}>
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
      <IconButton>
        <MenuIcon
          size={20}
          color={color}
        />
      </IconButton>
    </header>
  )
}
