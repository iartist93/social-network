import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { selectUsers } from "../users/userSlice";
import { editPost } from "./postSlice";

const EditPost = () => {
  let { postID } = useParams();

  const post = useSelector((state) =>
    state.posts.list.find((post) => post.id === postID.toString())
  );

  const users = useSelector(selectUsers);

  const dispatch = useDispatch();
  const history = useHistory();

  const [title, setTitle] = useState(post?.title);
  const [content, setContent] = useState(post?.content);
  const [author, setAuthor] = useState(post?.author);

  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleContentChange = (event) => setContent(event.target.value);
  const handleAuthorChange = (event) => setAuthor(event.target.value);

  const isEmpty = () =>
    title.trim().length === 0 && content.trim().length === 0;

  const updatePost = (event) => {
    if (title && content) {
      event.preventDefault();
      dispatch(editPost(postID, title, content, author));
      history.goBack();
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center"
      }}
    >
      {!post ? (
        <div> No post found! </div>
      ) : (
        <>
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
              value={author}
              onChange={handleAuthorChange}
            >
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
            <button onClick={updatePost} disabled={isEmpty()}>
              Edit Post
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default EditPost;
