import { Reaction } from '#entities/reactions'
import { HTMLString, ISOString } from '#shared/model'

export interface Post {
  _id: string
  title: string
  description: string
  content: HTMLString
  date: ISOString
  views: number
  statistics: {
    likes: number
    dislikes: number
  }
  reaction: Reaction | null
  reactions: Reaction[]
  authorId: string
  authorName: string
}
