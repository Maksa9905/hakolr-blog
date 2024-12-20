import { HTMLString, ISOString } from '#shared/model'

export enum PostAction {
  LIKE = 'like',
  DISLIKE = 'dislike',
  IDE = 'ide',
}

export interface Post {
  _id: string
  title: string
  description: string
  content: HTMLString
  date: ISOString
  views: number
  likes: number
  dislikes: number
  authorId: string
  authorName: string
}
