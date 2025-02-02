import { Reaction, ReactionType } from '#entities/reactions'

export type ShortReactionReponse = Reaction[]

export type DetailReactionResponse = ShortReactionReponse

export interface AddReactionBody {
  postId: string
  _id?: string
  type: ReactionType | null
}
