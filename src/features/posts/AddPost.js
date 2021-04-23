import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "./postSlice";
import { selectUsers, addUserPost } from "../users/userSlice";

const AddPost = () => {
  const dispatch = useDispatch();

  const users = useSelector(selectUsers);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("1");

  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleContentChange = (event) => setContent(event.target.value);
  const handleAuthorChange = (event) => setAuthor(event.currentTarget.value);

  const addNewPost = (event) => {
    // simple validation
    if (title && content) {
      console.log(`Author = ${author}`);
      event.preventDefault();
      dispatch(addPost(title, content, author));
      dispatch(addUserPost(author, title));
      // reset fields
      setTitle("");
      setContent("");
    }
  };

  const isEmpty = () =>
    title.trim().length === 0 || content.trim().length === 0;

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
        <select id="postAuthor" value={author} onChange={handleAuthorChange}>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
        <button onClick={addNewPost} disabled={isEmpty()}>
          Add Post
        </button>
      </form>
    </div>
  );
};

export default AddPost;
