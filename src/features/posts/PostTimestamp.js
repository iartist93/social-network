import React from "react";
import { useSelector } from "react-redux";
import {
  formatDistance,
  formatRelative,
  parseISO,
  formatDistanceToNow,
  subDays
} from "date-fns";

const PostTimestamp = ({ postID, edited = false }) => {
  const post = useSelector((state) =>
    state.posts.list.find((post) => post.id === postID)
  );

  const postDate = edited ? parseISO(post.editedAt) : parseISO(post.createdAt);
  const currentDate = new Date();
  const postDateMS = postDate.getTime();
  const currentDateMS = currentDate.getTime();
  const dateDiff = Math.floor(
    (currentDateMS - postDateMS) / (1000 * 60 * 60 * 24)
  );

  console.log(formatDistanceToNow(subDays(new Date(post.createdAt), 10)));

  return (
    <>
      <span>
        {dateDiff < 1
          ? formatDistance(postDate, new Date(), {
              addSuffix: true
            })
          : dateDiff < 7
          ? formatRelative(postDate, new Date())
          : formatDistanceToNow(postDate) + " ago"}
      </span>
    </>
  );
};

export default PostTimestamp;
