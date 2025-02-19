import { useCallback } from 'react'
import styles from './Avatar.module.css'

export interface AvatarProps {
  src: string
  size: 'small' | 'medium'
}

export const Avatar = ({ size, src }: AvatarProps) => {
  const getWidth = useCallback((size: 'small' | 'medium') => {
    switch (size) {
      case 'small':
        return 60
      case 'medium':
        return 100
    }
  }, [])

  return (
    <div
      style={{ width: getWidth(size) }}
      className={styles['avatar-container']}
    >
      <img
        src={src}
        alt="avatar"
        width={getWidth(size)}
      />
    </div>
  )
}
