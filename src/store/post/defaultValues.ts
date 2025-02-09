import { DetailedPost } from '#entities/posts'

export const defaultPost: DetailedPost = {
  _id: '',
  title: '',
  description: '',
  content: '',
  date: '',
  statistics: {
    likes: 0,
    dislikes: 0,
  },
  reaction: null,
  reactions: [],
  views: 0,
  authorId: '',
  authorName: '',
}
