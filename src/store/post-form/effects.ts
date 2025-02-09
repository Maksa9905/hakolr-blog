import {
  PostForm,
  createPost,
  getPostFormLabels,
} from '#entities/posts/index.js'
import { getCookies } from '#shared/lib/getCookies.js'
import { createEffect } from 'effector'
import { navigate } from 'vike/client/router'

export const createPostFx = createEffect(
  async (params: { postForm: PostForm; cookies: string }) => {
    const { postForm, cookies } = params

    const {
      data: { _id },
    } = await createPost(
      {
        content: postForm.content,
        title: postForm.title,
        description: postForm.description,
      },
      getCookies(cookies),
    )

    navigate(`/posts/${_id}`)
  },
)

export const getPostFormLabelsFx = createEffect(async (cookies?: string) => {
  return (await getPostFormLabels(getCookies(cookies))).data
})
