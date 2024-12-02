import { Post } from "../../model";
import { PostItem } from "../PostItem/PostItem";
import styles from "./PostList.module.css";

export const PostList = ({ posts }: {posts: Post[]}) => {
  return (
    <div className={styles.postlist}>
      {posts.map((post) => (
        <PostItem {...post} />
      ))}
    </div>
  );
};
