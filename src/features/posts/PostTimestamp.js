import React from "react";
import { useSelector } from "react-redux";
import { formatDistance, formatRelative } from "date-fns";

const PostTimestamp = ({ postID }) => {
  const post = useSelector((state) =>
    state.posts.list.find((post) => post.id === postID)
  );

  const postDate = new Date(post.date);
  const currentDate = new Date();
  const postDateMS = postDate.getTime();
  const currentDateMS = currentDate.getTime();
  const dateDiff = Math.floor(
    (currentDateMS - postDateMS) / (1000 * 60 * 60 * 24)
  );

  return (
    <>
      <span>
        {dateDiff < 1
          ? formatDistance(postDate, new Date(), {
              addSuffix: true
            })
          : formatRelative(postDate, new Date())}
      </span>
    </>
  );
};

export default PostTimestamp;
