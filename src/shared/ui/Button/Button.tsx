import styles from './Button.module.css'
import { ButtonHTMLAttributes } from 'react'

export type ButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'children'
> & {
  label: string
}

export const Button = ({ label, ...props }: ButtonProps) => {
  return (
    <button
      className={styles['button']}
      {...props}
    >
      {label}
    </button>
  )
}
