import { PostList } from '#entities/posts'
import { Pagination } from '#shared/ui'
import { navigate } from 'vike/client/router'
import { DEFAULT_LIMIT_PAGINATION } from '#shared/lib'
import { useUnit } from 'effector-react'
import { $posts } from '#store/posts/posts.js'

export const HomePage = () => {
  const handleChangePage = (page: number) => {
    navigate(`/?page=${page}&limit=${DEFAULT_LIMIT_PAGINATION}`)
  }

  const { page, total, limit } = useUnit($posts)

  return (
    <>
      <PostList />
      <Pagination
        page={page}
        total={total}
        limit={limit}
        maxLength={5}
        onChange={handleChangePage}
      />
    </>
  )
}
