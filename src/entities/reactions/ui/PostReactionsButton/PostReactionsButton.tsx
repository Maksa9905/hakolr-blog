import { useCallback } from 'react'

import { IconButton } from '#shared/ui'
import { ReactionType, LikeIcon } from '#entities/reactions'

import styles from './PostReactionsButton.module.css'

export interface PostReactionsButtonProps {
  value: ReactionType | null
  onClick: (action: ReactionType | null) => void
  statisctics: { likes: number; dislikes: number }
}

export const PostReactionsButton = ({
  value,
  onClick,
  statisctics,
}: PostReactionsButtonProps) => {
  const handleClick = useCallback(
    (action: ReactionType | null) => {
      if (action === value) onClick(null)
      else onClick(action)
    },
    [onClick, value],
  )

  return (
    <div className={styles.actions}>
      <IconButton onClick={() => handleClick(ReactionType.like)}>
        <LikeIcon
          selected={value === ReactionType.like}
          color={'var(--grey2)'}
          selectedColor={'var(--grey5)'}
        />
      </IconButton>
      <IconButton onClick={() => handleClick(ReactionType.dislike)}>
        <LikeIcon
          selected={value === ReactionType.dislike}
          rotate
          color={'var(--grey2)'}
          selectedColor={'var(--grey5)'}
        />
      </IconButton>
      <span>
        {statisctics.likes}/{statisctics.dislikes}
      </span>
    </div>
  )
}
