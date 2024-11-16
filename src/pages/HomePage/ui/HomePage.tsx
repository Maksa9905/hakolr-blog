import style from './HomePage.module.css'
import globalStyles from '#shared/lib/index.module.css'

export const HomePage = () => {
    return(
        <div className={`${style['home-page']}`}>
            <div className={globalStyles['page-container']}>

            </div>
        </div>
    )
}
