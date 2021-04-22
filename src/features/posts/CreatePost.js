import { random } from "faker";
import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  postSlice,
  postSelector,
  addPost,
  removePost,
  updatePost
} from "./postSlice";

import { generateID } from "../../utils/utils";

const CreatePost = () => {
  const posts = useSelector(postSelector);
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("ayman");

  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleContentChange = (event) => setContent(event.target.value);
  const handleAuthorChange = (event) => setAuthor(event.target.value);

  const addNewPost = (event) => {
    event.preventDefault();
    const post = { id: generateID(), title, author, content };
    dispatch(addPost(post));
    console.log(post);
  };

  const isEmpty = () =>
    title.trim().length === 0 && content.trim().length === 0;

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
        <select
          id="postAuthor"
          value="ayman"
          value={author}
          onChange={handleAuthorChange}
        >
          <option value="ahmad"> Ahmad </option>
          <option value="ayman"> Ayman </option>
          <option value="islam"> Islan </option>
        </select>
        <button onClick={addNewPost} disabled={isEmpty()}>
          Add Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;