import { Reaction } from '#entities/reactions'
import { User } from '#entities/users'
import { HTMLString, ISOString } from '#shared/model'

export interface ShortPostResponse {
  _id: string
  title: string
  description: string
  date: ISOString
  views: number
  reaction: Reaction
  reactions: {
    likes: number
    dislikes: number
    reactions: Reaction[]
  }
  author: User
}

export interface DetailPostResponse extends ShortPostResponse {
  content: HTMLString
}

export interface CreatePostDto {
  title: string
  description: string
  content: string
}

export interface PostFormLabelsResponse {
  _id: string
  title: string
  description: string
  content: string
}
