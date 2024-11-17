import { LikeIcon } from "#shared/icons";
import { IconButton, Link } from "#shared/ui";
import { useState } from "react";
import styles from "./PostItem.module.css";
import { PostAction } from "../../model/types";

type Props = {
  title: string;
  content: string;
  date: string;
  views: number;
  likes: number;
  dislikes: number;
  authorId: string;
  authorName: string;
};

export const PostItem = ({ title, content, date, views, likes, dislikes, authorName, authorId }: Props) => {
  const [action, setAction] = useState(PostAction.IDE);

  const handleLikeClick = () => {
    setAction((action) => {
      if (action === PostAction.LIKE) {
        return PostAction.IDE;
      }
      return PostAction.LIKE;
    });
  };

  const handleDisLikeClick = () => {
    setAction((action) => {
      if (action === PostAction.DISLIKE) {
        return PostAction.IDE;
      }
      return PostAction.DISLIKE;
    });
  };

  return (
    <div className={styles.post}>
      <h3 className={styles.title}>{title} - <Link href={'/user/' + authorId}>{authorName}</Link></h3>
      <p className={styles.content}>
        {content}
      </p>
      <p className={styles.date}>{date}</p>
      <p className={styles.views}>{views} просмотров</p>
      <div className={styles.actions}>
        <IconButton className={styles.likeButton} onClick={handleLikeClick}>
          <LikeIcon selected={action === PostAction.LIKE} color={"var(--grey4)"} />
        </IconButton>
        <IconButton className={styles.likeButton} onClick={handleDisLikeClick}>
          <LikeIcon selected={action === PostAction.DISLIKE} rotate color={"var(--grey4)"} />
        </IconButton>
        <span>
          {likes}/{dislikes}
        </span>
      </div>
    </div>
  );
};
