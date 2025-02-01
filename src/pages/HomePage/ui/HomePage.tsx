import { PostList } from '#entities/posts'
import { Pagination } from '#shared/ui'
import { navigate } from 'vike/client/router'
import { DEFAULT_LIMIT_PAGINATION } from '#shared/lib'
import { useUnit } from 'effector-react'
import { $pagination } from '#store/pagination'
export const HomePage = () => {
  const handleChangePage = (page: number) => {
    navigate(`/?page=${page}&limit=${DEFAULT_LIMIT_PAGINATION}`)
  }

  const { page, total, limit } = useUnit($pagination)

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
