import { DetailPostResponse, ShortPostResponse } from '../api'
import { DetailedPost, Post } from './types'

export const mapDetailedPost = (postReponse: DetailPostResponse) => {
  const post: DetailedPost = {
    ...postReponse,
    statistics: {
      likes: postReponse.reactions.likes,
      dislikes: postReponse.reactions.dislikes,
    },
    reactions: postReponse.reactions.reactions,
    authorId: postReponse.author._id,
    authorName: postReponse.author.name,
  }

  return post
}

export const mapPost = (postResponse: ShortPostResponse) => {
  const post: Post = {
    ...postResponse,
    statistics: {
      likes: postResponse.reactions.likes,
      dislikes: postResponse.reactions.dislikes,
    },
    reactions: postResponse.reactions.reactions,
    authorId: postResponse.author._id,
    authorName: postResponse.author.name,
  }

  return post
}
