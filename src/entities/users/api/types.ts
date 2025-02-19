import { ShortPostResponse } from '#entities/posts/index.js'
import { ReactionType } from '#entities/reactions'

export interface AuthBodyDto {
  email: string
  password: string
}

export interface UserResponse {
  _id: string
  name: string
  avatarUrl: string
  followed: boolean
  status: string
}

export interface DetailedUserResponse extends UserResponse {
  followers: UserResponse[]
  followings: UserResponse[]
  posts: ShortPostResponse[]
}
