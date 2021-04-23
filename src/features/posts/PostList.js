import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";

import { selectPosts, reverseOrder } from "./postSlice";
import PostTimestamp from "./PostTimestamp";

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
