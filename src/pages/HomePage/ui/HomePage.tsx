import style from './HomePage.module.css'
import globalStyles from '#shared/lib/index.module.css'
import { PostList } from '#entities/posts'

export const HomePage = () => {
    return(
        <div className={`${style['home-page']}`}>
            <div className={`${globalStyles['page-container']} ${style['home-page__container']}`}>
                <PostList />
            </div>
        </div>
    )
}
