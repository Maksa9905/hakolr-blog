import styles from './Paper.module.css'

export interface PaperProps {
  children: React.ReactNode
  className?: string
}

export const Paper = ({ children, className: propClassName }: PaperProps) => {
  const className = propClassName
    ? `${propClassName} ${styles['paper-container']}`
    : styles['paper-container']

  return <div className={className}>{children}</div>
}
