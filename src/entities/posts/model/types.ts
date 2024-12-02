export enum PostAction {
    LIKE = 'like',
    DISLIKE = 'dislike',
    IDE = 'ide'
}

export interface Post {
    _id: string;
    title: string
    content: string
    date: string
    views: number
    likes: number
    dislikes: number
    authorId: string
    authorName: string
}