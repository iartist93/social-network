import React from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";

import { selectPosts } from "./postSlice";
import PostTimestamp from "./PostTimestamp";

const PostList = () => {
  const posts = useSelector(selectPosts);

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
          <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>
          <h6>
            By <PostAuthor userID={post.author} /> {"  "}
            <PostTimestamp postID={post.id} />
          </h6>
          <p>{post.content}</p>
        </article>
      ))}
    </div>
  );
};

export default PostList;
