import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import PostAuthor from "./PostAuthor";

const ViewPost = () => {
  let { postID } = useParams();
  // subscibe to specific state data
  // don't subscribe to the whole posts, as this will cause re-render each time posts modified
  const post = useSelector((state) =>
    state.posts.list.find((post) => post.id === postID.toString())
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      {!post ? (
        <div> Post not found! </div>
      ) : (
        <article
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
          <h6>
            By : <PostAuthor userID={post.author} />
          </h6>
          <p>{post.content}</p>
          <Link to={`/editpost/${postID}`} className="button">
            Edit
          </Link>
        </article>
      )}
    </div>
  );
};

export default ViewPost;
