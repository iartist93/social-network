import React from "react";

import { addReact } from "./postSlice";
import { useDispatch, useSelector } from "react-redux";

const PostReaction = ({ post }) => {
  const dispatch = useDispatch();
  const { like, celebrate, love } = useSelector(
    (state) => state.posts.list.find((p) => p.id === post.id).reaction
  );

  return (
    <div
      style={{
        display: "flex"
      }}
    >
      <button
        className="reaction-button muted-button"
        onClick={() => dispatch(addReact(0, post.id))}
      >
        <span role="img" aria-label="thumb-up">
          👍
        </span>
        <span> {like} </span>
      </button>
      <button
        className="reaction-button muted-button"
        onClick={() => dispatch(addReact(1, post.id))}
      >
        <span role="img" aria-label="celebrate">
          🎉
        </span>
        <span> {celebrate} </span>
      </button>
      <button
        className="reaction-button muted-button"
        onClick={() => dispatch(addReact(2, post.id))}
      >
        <span role="img" aria-label="love">
          ❤️
        </span>
        <span> {love} </span>
      </button>
    </div>
  );
};

export default PostReaction;
