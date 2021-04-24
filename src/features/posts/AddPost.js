import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, addNewPost } from "./postSlice";
import { selectUsers, addUserPost } from "../users/userSlice";
import { unwrapResult } from "@reduxjs/toolkit";

const AddPost = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [user, setUser] = useState("");
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    setUser(users[0].id);
  }, [users]);

  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleContentChange = (event) => setContent(event.target.value);
  const handleAuthorChange = (event) => setUser(event.currentTarget.value);

  const handleAddNewPost = async (event) => {
    // simple validation
    if (title && content) {
      setStatus("pending");
      event.preventDefault();
      try {
        const result = await dispatch(
          addNewPost({ title, content, userId: user })
        );
        unwrapResult(result);
      } catch (error) {
        console.error(error);
      } finally {
        // dispatch(addUserPost(user, title));
        // reset fields
        setTitle("");
        setContent("");
        setStatus("idle");
      }
    }
  };

  const canPost = () => !([title, content].every(Boolean) && status === "idle");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center"
      }}
    >
      <h1>Add new post.</h1>
      <form
        style={{
          textAlign: "center",
          width: "80%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start"
        }}
      >
        <label htmlFor="postTitle"> Title </label>
        <input
          id="postTitle"
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
        />
        <label htmlFor="postContent"> Content </label>
        <textarea
          id="postContent"
          type="text"
          placeholder="content"
          value={content}
          onChange={handleContentChange}
        />
        <label htmlFor="postAuthor"> Author </label>
        <select id="postAuthor" value={user} onChange={handleAuthorChange}>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
        <button onClick={handleAddNewPost} disabled={canPost()}>
          Add Post
        </button>
      </form>
    </div>
  );
};

export default AddPost;
