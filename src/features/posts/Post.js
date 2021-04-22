import { random } from "faker";
import React from "react";

import { useSelector } from "react-redux";

import { postSelector } from "./postSlice";

const Post = () => {
  const posts = useSelector(postSelector);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <h1>Posts</h1>
      {posts.map((post) => (
        <article
          key={post.id}
          style={{
            minHeight: 150,
            width: 500,
            backgroundColor: "#EEEEEE",
            textDecoration: "none",
            marginBottom: 20,
            paddingTop: 1,
            paddingLeft: 10,
            paddingBottom: 5
          }}
        >
          <h3>{post.title}</h3>
          <h6>By : {post.author}</h6>
          <p>{post.content}</p>
        </article>
      ))}
    </div>
  );
};

export default Post;
