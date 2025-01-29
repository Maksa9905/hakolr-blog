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
    <div className={styles['page']}>
      <div
        className={`${styles['page-container']} ${withHeader ? styles['with-header'] : ''}`}
      >
        {children}
      </div>
    </div>
  )
}
