import React from "react";

import { addReact } from "./postSlice";
import { useDispatch, useSelector } from "react-redux";

const reactionList = {
  thumbsUp: "👍",
  hooray: "🙌",
  heart: "💙",
  rocket: "🚀",
  eyes: "👀"
};

const PostReaction = ({ post }) => {
  const dispatch = useDispatch();
  const reactions = useSelector(
    (state) => state.posts.list.find((p) => p.id === post.id).reactions
  );

  return (
    <div
      style={{
        display: "flex"
      }}
    >
      {Object.entries(reactionList).map(([reaction, emoji]) => (
        <button
          key={reaction}
          className="reaction-button muted-button"
          onClick={() => dispatch(addReact(reaction, post.id))}
        >
          <span role="img" aria-label={reaction}>
            {emoji}
          </span>
          <span> {reactions[reaction]} </span>
        </button>
      ))}
    </div>
  );
};

export default PostReaction;
