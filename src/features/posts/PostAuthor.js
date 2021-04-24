import { useSelector } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";

// each time you need a new state make a new component
const PostAuthor = ({ userID }) => {
  const user = useSelector((state) =>
    state.users.list.find((user) => user.id === userID)
  );

  return (
    <span>
      {user ? (
        <Link to={`/user/${user.id}`}>{user.name}</Link>
      ) : (
        "Unknow Author"
      )}
    </span>
  );
};

export default PostAuthor;
