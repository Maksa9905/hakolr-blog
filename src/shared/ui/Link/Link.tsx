import styles from './Link.module.css'
import { LinkHTMLAttributes } from 'react'

export type LinkProps = LinkHTMLAttributes<HTMLAnchorElement> & {
    href: string,
    children: React.ReactNode
}

export const Link = ({href, children, className, ...props}: LinkProps) => {
    return(
        <a className={`${styles.link} ${className}`} {...props} href={href}>{children}</a>
    )
}