import { Reaction } from '#entities/reactions'
import { HTMLString, ISOString } from '#shared/model'

export interface Post {
  _id: string
  title: string
  description: string
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

export interface DetailedPost extends Post {
  content: HTMLString
}

export interface Posts {
  limit: number
  page: number
  total: number
  data: Post[]
}

export type HtmlFieldStates = 'INPUT' | 'VIEW'

export interface PostFormLabels {
  _id: string
  title: string
  description: string
  content: string
}

export interface PostForm {
  title: string
  description: string
  content: string
  HTMLFieldState: HtmlFieldStates
  labels: PostFormLabels
}
