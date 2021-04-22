import React from "react";

import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const UserPosts = () => {
  const { userID } = useParams();
  const user = useSelector((state) =>
    state.users.list.find((user) => user.id === userID.toString())
  );
  const { id, name, posts } = user;

  console.log(id, name, posts);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <h1>{name} Posts</h1>

      <ul>
        {posts.map((post) => (
          <li
            key={user.id}
            style={{
              width: 500,
              backgroundColor: "#EEEEEE",
              textDecoration: "none",
              listStyle: "none",
              marginBottom: 5,
              paddingTop: 1,
              paddingBottom: 1,
              paddingLeft: 10
            }}
          >
            <Link to={`post/${post.id}`}>
              <h3>{post.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPosts;
