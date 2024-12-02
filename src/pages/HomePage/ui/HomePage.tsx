import style from './HomePage.module.css'
import globalStyles from '#shared/lib/index.module.css'
import { Post, PostList } from '#entities/posts'
import { PageContainer, Pagination } from '#shared/ui'
import { PaginationType } from '#shared/model'
import { navigate } from 'vike/client/router'
import { DEFAULT_LIMIT_PAGINATION } from '#shared/lib'

export const HomePage = ({posts, pagination}: {posts: Post[], pagination: PaginationType}) => {
    const handleChangePage = (page: number) => {
        navigate(`/?page=${page}&limit=${DEFAULT_LIMIT_PAGINATION}`)
    }

    const {page, total, limit} = pagination

    return(
        <PageContainer>
            <PostList posts={posts} />
            <Pagination page={page} total={total} limit={limit} maxLength={5} onChange={handleChangePage} />
        </PageContainer>
    )
}
