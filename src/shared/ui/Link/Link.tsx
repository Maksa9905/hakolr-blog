import styles from './Link.module.css'

export type LinkProps = {
    href: string,
    children: React.ReactNode
}

export const Link = ({href, children}: LinkProps) => {
    return(
        <a className={styles.link} href={href}>{children}</a>
    )
}