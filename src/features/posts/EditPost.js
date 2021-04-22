import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { updatePost } from "./postSlice";

import { useHistory, useParams } from "react-router-dom";

const EditPost = () => {
  let postID = useParams();
  postID = parseInt(postID.toString(), 10);

  const post = useSelector((state) =>
    state.posts.list.find((post) => post.id === postID)
  );
  const dispatch = useDispatch();
  const history = useHistory();

  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const [author, setAuthor] = useState(post.author);

  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleContentChange = (event) => setContent(event.target.value);
  const handleAuthorChange = (event) => setAuthor(event.target.value);

  const editPost = (event) => {
    if (title && content) {
      event.preventDefault();
      const post = { id: postID, title, author, content };
      dispatch(updatePost(post));
      history.goBack();
    }
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
        <button onClick={editPost} disabled={isEmpty()}>
          Edit Post
        </button>
      </form>
    </div>
  );
};

export default EditPost;
