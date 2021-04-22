import React from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectUsers } from "./userSlice";

const UserList = () => {
  const users = useSelector(selectUsers);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
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
            <Link to={`/user/${user.id}`}>
              <h3>{user.name}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
