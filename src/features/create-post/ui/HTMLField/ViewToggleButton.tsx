import { Button } from '#shared/ui/index.js'
import styles from './HTMLField.module.css'

export interface ViewToggleButtonProps {
  label: string
  onClick: () => void
}

export const ViewToggleButton = ({ label, onClick }: ViewToggleButtonProps) => {
  return (
    <Button
      className={styles['view-button']}
      label={label}
      onClick={onClick}
    />
  )
}
