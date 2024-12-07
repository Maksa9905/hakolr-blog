import styles from './PageContainer.module.css'

export const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles['page-container']}>{children}</div>
}
