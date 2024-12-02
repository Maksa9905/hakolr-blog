import { PostPage } from "#pages/PostPage";
import { useData } from "vike-react/useData"


export const Page = () => {
    const { content } = useData<{content: string}>()

    return(
        <PostPage content={content} />
    )
}