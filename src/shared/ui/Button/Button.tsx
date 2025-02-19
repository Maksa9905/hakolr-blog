import styles from './Button.module.css'
import { ButtonHTMLAttributes } from 'react'

export type ButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'children'
> & {
  label: string
  endAdornment?: React.ReactNode
}

export const Button = ({ label, endAdornment, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={
        props.className
          ? `${props.className} ${styles['button']} ${props.disabled ? styles.disabled : ''}`
          : `${styles['button']} ${props.disabled ? styles.disabled : ''}`
      }
    >
      {label}
      {endAdornment}
    </button>
  )
}
