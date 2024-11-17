import { Post } from "../../model";
import { PostItem } from "../PostItem/PostItem";
import styles from "./PostList.module.css";

export const PostList = () => {
  const posts: Post[] = [
    {
      title: "title",
      content: `lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit`,
      date: "01.01.2024",
      views: 42,
      likes: 3,
      dislikes: 1,
      authorId: '1',
      authorName: 'Ivan'
    },
    {
        title: "title",
        content: `lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing`,
        date: "01.01.2024",
        views: 42,
        likes: 3,
        dislikes: 1,
        authorId: '2',
        authorName: 'Petr'
      },
      {
        title: "title",
        content: `rem ipsum dolor sit amet consectetur adipiscing elit`,
        date: "01.01.2024",
        views: 42,
        likes: 3,
        dislikes: 1,
        authorId: '3',
        authorName: 'Vladimir'
      },
      {
        title: "title",
        content: `lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit`,
        date: "01.01.2024",
        views: 42,
        likes: 3,
        dislikes: 1,
        authorId: '4',
        authorName: 'Maksim'
      },
      {
        title: "title",
        content: `lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit`,
        date: "01.01.2024",
        views: 42,
        likes: 3,
        dislikes: 1,
        authorId: '5',
        authorName: 'Sergey'
      },
      {
          title: "title",
          content: `lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing`,
          date: "01.01.2024",
          views: 42,
          likes: 3,
          dislikes: 1,
          authorId: '6',
          authorName: 'Nikita'
        },
        {
          title: "title",
          content: `rem ipsum dolor sit amet consectetur adipiscing elit`,
          date: "01.01.2024",
          views: 42,
          likes: 3,
          dislikes: 1,
          authorId: '7',
          authorName: 'Dmitry'
        },
        {
          title: "title",
          content: `lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit`,
          date: "01.01.2024",
          views: 42,
          likes: 3,
          dislikes: 1,
          authorId: '8',
          authorName: 'Anton'
        },
  ];

  return (
    <div className={styles.postlist}>
      {posts.map((post) => (
        <PostItem {...post} />
      ))}
    </div>
  );
};
