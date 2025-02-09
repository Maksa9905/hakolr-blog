import { TextArea, TextAreaProps } from '#shared/ui/index.js'
import { HtmlFieldStates, MAX_POST_CONTENT_LENGTH } from '#entities/posts/model'
import styles from './HTMLField.module.css'
import { contentParser } from '#entities/posts'

export type HTMLFieldProps = TextAreaProps & {
  state: HtmlFieldStates
}
export const HTMLField = ({ state, ...props }: HTMLFieldProps) => {
  if (state === 'VIEW') {
    return (
      <div className={styles['HTMLView-container']}>
        <div dangerouslySetInnerHTML={{ __html: contentParser(props.value) }} />
      </div>
    )
  }

  return (
    <div className={styles['HTMLField-container']}>
      <TextArea
        variant="bottomlined"
        className={`${styles.HTMLField} ${styles['full-width']}`}
        maxLength={MAX_POST_CONTENT_LENGTH}
        {...props}
      />
    </div>
  )
}
