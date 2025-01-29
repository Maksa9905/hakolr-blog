import { useEffect, useState } from 'react'
import { JSIcon } from '../JSIcon'
import styles from './HakolrBlogIcon.module.css'
import { getRandomColor } from '#shared/lib/getRandomColor.js'

export const HakolrBlogIcon = () => {
  const [color, setColor] = useState(getRandomColor())

  useEffect(() => {
    const interval = setInterval(() => {
      setColor(getRandomColor())
    }, 3000)
    return () => clearInterval(interval)
  })

  return (
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
  )
}
