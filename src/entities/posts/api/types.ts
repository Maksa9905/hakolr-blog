import { HTMLString, ISOString } from '#shared/model'

export interface ShortPostResponse {
  _id: string
  title: string
  description: string
  date: ISOString
  views: number
  likes: number
  dislikes: number
  authorId: string
  authorName: string
}

export interface DetailPostResponse extends ShortPostResponse {
  content: HTMLString
}
