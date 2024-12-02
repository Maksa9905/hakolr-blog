import styles from './PostPage.module.css'
import { PageContainer } from '#shared/ui'
import { PostHeader } from '#widgets/PostHeader'
import { PostContent } from '#widgets/PostContent'
import { PostFooter } from '#widgets/PostFooter'

export const PostPage = ({content}: {content: string}) => {
    const date = new Date().toISOString();

    return(
        <PageContainer>
            <PostHeader 
                title='Альфа версия Evolution design linter' 
                description='Если хотите помочь нам с разработкой, присоединяйтесь в сообщество' 
                date={date}
            />
            <PostContent content={content} />
            <PostFooter />
        </PageContainer>
    )
}
