import { createSlice, nanoid } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    list: [
      // { id: "1", title: "post 1", content: "Post 1 content", author: "1" },
      // { id: "2", title: "post 2", content: "Post 2 content", author: "2" }
    ],
    config: {
      reversed: true
    }
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
        const createdAt = new Date().toISOString();
        return {
          payload: {
            id,
            title,
            content,
            author,
            createdAt,
            edit: false,
            reaction: {
              like: 0,
              celebrate: 0,
              love: 0
            }
          }
        };
      }
    },
    editPost: {
      reducer: (state, action) => {
        const { id, title, content, author } = action.payload;
        const post = state.list.find((post) => post.id === id);
        const editedAt = new Date().toISOString();

        if (post) {
          post.title = title;
          post.content = content;
          post.author = author;
          post.edit = true;
          post.editedAt = editedAt;
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
    },
    reverseOrder: (state) => {
      state.config.reversed = !state.config.reversed;
    },
    addReact: {
      reducer: (state, action) => {
        const { reactionIndex, postID } = action.payload;
        const post = state.list.find((post) => post.id === postID);

        switch (reactionIndex) {
          case 0:
            post.reaction.like += 1;
            break;
          case 1:
            post.reaction.celebrate += 1;
            break;
          case 2:
            post.reaction.love += 1;
            break;
          default:
            break;
        }
      },
      prepare: (reactionIndex, postID) => {
        return {
          payload: {
            reactionIndex,
            postID
          }
        };
      }
    }
  }
});

export const {
  addPost,
  removePost,
  editPost,
  reverseOrder,
  addReact
} = postSlice.actions;
export const selectPosts = (state) => state.posts.list;
export default postSlice.reducer;
