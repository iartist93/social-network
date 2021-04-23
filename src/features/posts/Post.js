import React from "react";
import { Link } from "react-router-dom";
import PostTimestamp from "./PostTimestamp";
import PostAuthor from "./PostAuthor";

import PostReaction from "./PostReaction";

const Post = ({ post }) => {
  return (
    <article
      key={post.id}
      style={{
        minHeight: 150,
        width: 500,
        backgroundColor: "#f2f7ff",
        textDecoration: "none",
        marginBottom: 20,
        paddingTop: 1,
        paddingLeft: 10,
        paddingBottom: 5
      }}
      className="post-excerpt"
    >
      <Link to={`/post/${post.id}`}>
        <h3>{post.title}</h3>
      </Link>
      <h4>
        By <PostAuthor userID={post.author} /> {"  "}
        <PostTimestamp postID={post.id} />
      </h4>
      <p>{post.content}</p>
      <PostReaction post={post} />
    </article>
  );
};

export default Post;
