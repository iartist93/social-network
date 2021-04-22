import { createSlice, nanoid } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    list: [
      { id: "1", title: "post 1", content: "Post 1 content", author: "Ayman" },
      { id: "2", title: "post 2", content: "Post 2 content", author: "Ahmad" }
    ]
  },
  reducers: {
    addPost: {
      reducer: (state, action) => {
        state.list.push(action.payload);
      },
      // addPost(title, contnt, author)
      // then prepare the payload object
      // return an object that content the payload
      prepare: (title, content, author) => {
        const id = nanoid();
        return {
          payload: {
            id,
            title,
            content,
            author
          }
        };
      }
    },
    updatePost: {
      reducer: (state, action) => {
        const { id, title, content, author } = action.payload;
        const post = state.list.find((post) => post.id === id);
        if (post) {
          post.title = title;
          post.content = content;
          post.author = author;
        }
      },
      prepare: (id, title, content, author) => {
        return {
          payload: {
            id,
            title,
            content,
            author
          }
        };
      }
    }
  }
});

export const { addPost, removePost, updatePost } = postSlice.actions;
export const selectPosts = (state) => state.posts.list;

export default postSlice.reducer;
