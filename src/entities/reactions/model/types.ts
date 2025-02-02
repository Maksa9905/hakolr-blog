export enum ReactionType {
  like = 'like',
  dislike = 'dislike',
}

export interface Reaction {
  _id?: string
  type: ReactionType | null
  postId: string
  userId: string
}
