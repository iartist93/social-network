import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "posts",
  initialState: { list: [] },
  reducers: {
    addPost: (state, action) => {
      state.list.push(action.payload);
    }
  }
});

export const { addPost, removePost, updatePost } = postSlice.actions;
export const postSelector = (state) => state.posts.list;

export default postSlice.reducer;
