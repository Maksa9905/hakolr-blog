import { Link } from '#shared/ui/index.js'
import { Avatar } from '../Avatar'
import styles from './UserListItem.module.css'

export interface UserListItemProps {
  className?: string
  avatarUrl: string
  name: string
  status: string
  _id: string
}

export const UserListItem = ({
  className: propClassName,
  avatarUrl,
  name,
  status,
  _id: userId,
}: UserListItemProps) => {
  const className = `${styles['user-list-item']} ${propClassName || ''}`

  return (
    <div className={className}>
      <Avatar
        size="small"
        src={avatarUrl}
      />
      <h3>
        <Link href={`/user/${userId}`}>{name}</Link>
      </h3>
      <p className={styles['status']}>{status.slice(0, 100)}</p>
    </div>
  )
}
