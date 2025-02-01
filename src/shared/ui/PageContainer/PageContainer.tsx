import styles from './PageContainer.module.css'

export type PageContainerProps = {
  children: React.ReactNode
  withHeader?: boolean
}

export const PageContainer = ({
  children,
  withHeader = true,
}: PageContainerProps) => {
  return (
    <div
      className={`${withHeader ? styles['with-header'] : ''} ${styles['page']}`}
    >
      <div className={`${styles['page-container']}`}>{children}</div>
    </div>
  )
}
