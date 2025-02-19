import { Post } from '#entities/posts'

export interface User {
  _id: string
  name: string
  avatarUrl: string
  status: string
  followed: boolean
}

export interface UserById extends User {}
