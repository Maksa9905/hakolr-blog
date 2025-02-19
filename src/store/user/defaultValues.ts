import { Post } from '#entities/posts/index.js'
import { UserById } from '#entities/users'

export const defaultUserValues: UserById = {
  _id: '',
  name: '',
  avatarUrl: '',
  status: '',
  followed: false,
}

export const defaultMyInfoValues: UserById | null = null

export const defaultUserPostsValues: Post[] = []

export const defaultUserFollowersValues: UserById[] = []
