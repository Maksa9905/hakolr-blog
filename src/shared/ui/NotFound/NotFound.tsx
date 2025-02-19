import { PigeonIcon } from '#shared/icons'
import styles from './NotFound.module.css'

export type NotFoundProps = {
  label: string
}

export const NotFound = ({ label }: NotFoundProps) => {
  return (
    <div className={styles['not-found-page']}>
      <PigeonIcon
        size={160}
        color={'var(--grey5)'}
      />
      <h3 className={styles['label']}>{label}</h3>
    </div>
  )
}
