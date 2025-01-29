import styles from './TextField.module.css'
import { InputHTMLAttributes } from 'react'

export type TextFieldProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type'
> & {
  label?: string
}

export const TextField = ({ label, ...props }: TextFieldProps) => {
  return (
    <input
      placeholder={label}
      className={styles['input']}
      type="text"
      {...props}
    />
  )
}
