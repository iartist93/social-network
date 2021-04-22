import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    list: [
      { id: 1, title: "post 1", content: "Post 1 content", author: "Ayman" },
      { id: 2, title: "post 2", content: "Post 2 content", author: "Ahmad" }
    ]
  },
  reducers: {
    addPost: (state, action) => {
      state.list.push(action.payload);
    }
  }
});

export const { addPost, removePost, updatePost } = postSlice.actions;
export const selectPosts = (state) => state.posts.list;

export default postSlice.reducer;
