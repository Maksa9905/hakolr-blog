import { Button, Paper, TextArea, TextField } from '#shared/ui'
import { useUnit } from 'effector-react'
import {
  HtmlFieldStates,
  MAX_POST_DESCRIPTION_LENGTH,
  MAX_POST_TITLE_LENGTH,
} from '../../model'
import { HTMLField } from '../HTMLField'
import { ViewToggleButton } from '../HTMLField/ViewToggleButton'
import styles from './NewPostForm.module.css'
import { setValue, changeHTMLFieldState } from '#store/post-form/events'
import { $postForm } from '#store/post-form'
import { createPostFx } from '#store/post-form/effects.js'

export const NewPostForm = () => {
  const { title, description, content, HTMLFieldState, labels } =
    useUnit($postForm)

  return (
    <div>
      <Paper>
        <TextField
          variant="bottomlined"
          value={title}
          label={labels.title}
          className={`${styles.title} ${styles['full-width']}`}
          onChange={(e) => setValue({ title: e.target.value })}
          maxLength={MAX_POST_TITLE_LENGTH}
          width={'100%'}
        />
      </Paper>
      <Paper>
        <TextArea
          value={description}
          disabledResize
          label={labels.description}
          variant="bottomlined"
          disabledLineBreak
          className={`${styles.description} ${styles['full-width']}`}
          maxLength={MAX_POST_DESCRIPTION_LENGTH}
          onChange={(value) => setValue({ description: value })}
        />
      </Paper>
      <Paper>
        <HTMLField
          state={HTMLFieldState}
          label={labels.content}
          value={content}
          onChange={(value) => setValue({ content: value })}
        />
        <ViewToggleButton
          label={HTMLFieldState === 'VIEW' ? 'Редактировать' : 'HTML'}
          onClick={() => changeHTMLFieldState()}
        />
        <Button
          label="Создать пост"
          onClick={() =>
            createPostFx({
              postForm: $postForm.getState(),
              cookies: document.cookie,
            })
          }
          disabled={!title || !description || !content}
          className={styles['submit-button']}
        />
      </Paper>
    </div>
  )
}
