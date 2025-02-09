import {
  ChangeEvent,
  RefAttributes,
  useCallback,
  useLayoutEffect,
  useRef,
} from 'react'
import styles from './TextArea.module.css'
import { MIN_TEXTAREA_HEIGHT } from '#shared/lib/consts.js'

export enum TextAreaVariants {
  outlined = 'outlined',
  filled = 'filled',
  bottomlined = 'bottomlined',
}

export interface TextAreaProps {
  value: string
  onChange: (value: string) => void
  className?: string
  variant?: keyof typeof TextAreaVariants
  maxLength?: number
  disabledResize?: boolean
  label?: string
  endAdornment?: React.ReactNode
  disabledLineBreak?: boolean
  maxHeight?: string
}

export const TextArea = ({
  value,
  onChange,
  className: propClassName,
  variant = 'outlined',
  maxLength,
  disabledResize = false,
  label,
  endAdornment,
  disabledLineBreak = false,
  maxHeight,
}: TextAreaProps) => {
  const className = propClassName
    ? `${propClassName} ${styles.textarea} ${styles[variant]}`
    : `${styles.textarea} ${styles[variant]}`

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      if (disabledLineBreak && event.target.value.includes('\n')) return
      onChange(event.target.value)
    },
    [],
  )

  return (
    <div className={styles['textarea-container']}>
      <textarea
        placeholder={label || 'Введите текст'}
        maxLength={maxLength}
        value={value}
        onChange={handleChange}
        className={className}
        style={{
          resize: disabledResize ? 'none' : 'vertical',
          maxHeight,
        }}
      />
      {endAdornment}
    </div>
  )
}
