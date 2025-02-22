import styles from './TextField.module.css'
import { InputHTMLAttributes } from 'react'

export enum TextFieldVariant {
  outlined = 'outlined',
  filled = 'filled',
  bottomlined = 'bottomlined',
}

export type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  variant?: keyof typeof TextFieldVariant
  maxLength?: number
}

export const TextField = ({
  label,
  variant = 'outlined',
  width,
  ...props
}: TextFieldProps) => {
  const className = props.className
    ? `${props.className} ${styles.input} ${styles[variant]}`
    : `${styles.input} ${styles[variant]}`

  return (
    <input
      {...props}
      style={{ width: width || 'auto' }}
      placeholder={label || 'Введите текст'}
      className={className}
    />
  )
}
