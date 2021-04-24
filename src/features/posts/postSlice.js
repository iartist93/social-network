import {
  createAsyncThunk,
  createSlice,
  nanoid,
  unwrapResult
} from "@reduxjs/toolkit";
import { client } from "../../api/client";

// fetch posts thunk
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await client.get("/fakeApi/posts");
  return response.posts;
});

// POST the new post to the server and then update the state
export const addNewPost = createAsyncThunk("posts/addNewPost", async (post) => {
  const response = await client.post("/fakeApi/posts", { post });
  return response.post;
});

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    list: [],
    reversed: true,
    status: "idle",
    error: false
  },
  reducers: {
    addPost: {
      reducer: (state, action) => {
        state.list.push(action.payload);
      },
      // addPost(title, contnt, author)
      // then prepare the payload object
      // return an object that content the payload
      prepare: (title, content, user) => {
        const id = nanoid();
        const date = new Date().toISOString();
        return {
          payload: {
            id,
            title,
            content,
            user,
            date,
            edit: false,
            reactions: {
              thumbsUp: 0,
              hooray: 0,
              heart: 0,
              rocket: 0,
              eyes: 0
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
          post.user = author;
          post.edit = true;
          post.editedAt = editedAt;
        }
      },
      prepare: (id, title, content, user) => {
        return {
          payload: {
            id,
            title,
            content,
            user
          }
        };
      }
    },
    reverseOrder: (state) => {
      state.reversed = !state.reversed;
    },
    addReact: {
      reducer: (state, action) => {
        const { reaction, postID } = action.payload;
        const post = state.list.find((post) => post.id === postID);
        post.reactions[reaction] += 1;
      },
      prepare: (reaction, postID) => {
        return {
          payload: {
            reaction,
            postID
          }
        };
      }
    }
  },
  extraReducers: {
    [fetchPosts.pending]: (state) => {
      state.status = "pending";
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.state = "completed";
      state.list = action.payload;
    },
    [addNewPost.fulfilled]: (state, action) => {
      state.list.push(action.payload);
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
