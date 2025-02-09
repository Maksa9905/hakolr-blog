import { HtmlFieldStates, PostForm } from '#entities/posts'

export const defaultPostForm: PostForm = {
  title: '',
  description: '',
  content: '',
  HTMLFieldState: 'INPUT',
  labels: {
    _id: '',
    title: '',
    description: '',
    content: '',
  },
}
