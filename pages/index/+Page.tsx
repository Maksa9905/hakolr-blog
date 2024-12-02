import { Post } from "#entities/posts";
import { HomePage } from "#pages/HomePage/ui";
import { WithPagination } from "#shared/model";
import { useData } from "vike-react/useData";

export default function Page() {
    const {data: posts, total, limit, page}: WithPagination<Post[]> = useData();

    const pagination = {
        page,
        total,
        limit
    }

    return (
        <HomePage posts={posts} pagination={pagination} />
    )
}