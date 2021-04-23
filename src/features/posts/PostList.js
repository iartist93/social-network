import React from "react";

import { useDispatch, useSelector } from "react-redux";
import Post from "./Post";

import { selectPosts, reverseOrder } from "./postSlice";

const PostList = () => {
  const posts = useSelector(selectPosts);
  const reversedPosts = posts
    .slice()
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));

  const dispatch = useDispatch();

  const handleReverse = () => {
    dispatch(reverseOrder());
  };

  const reversedState = useSelector((state) => state.posts.config.reversed);

  const displayedPosts = reversedState ? reversedPosts : posts;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          height: 50
        }}
      >
        <h1
          style={{
            flex: "1 1 auto",
            textAlign: "center"
          }}
        >
          Posts
        </h1>
        <div>
          <button onClick={handleReverse}>Reverse</button>
        </div>
      </div>
      {displayedPosts.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
};

export default PostList;
