import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { client } from "../../api/client";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (dispatch, getState) => {
    const response = await client.get("/fakeApi/users");
    console.log(response);
    return response.users;
  }
);

const userSlice = createSlice({
  name: "users",
  initialState: {
    list: [
      { id: "1", name: "Ahmad", posts: [] },
      { id: "2", name: "Ayman", posts: [] },
      { id: "3", name: "Mahmoud", posts: [] },
      { id: "4", name: "Mahmmed", posts: [] }
    ]
  },
  reducers: {
    addUserPost: {
      reducer: (state, action) => {
        const { id, title } = action.payload;
        const user = state.list.find((user) => user.id === id);
        user.posts.push({ title });
      },
      prepare: (userID, postTitle) => {
        console.log(userID);
        return {
          payload: {
            id: userID,
            title: postTitle
          }
        };
      }
    }
  },
  extraReducers: {
    [fetchUsers.fulfilled]: (state, action) => {
      state.list = action.payload;
    }
  }
});

export const selectUsers = (state) => state.users.list;
export const { addUserPost } = userSlice.actions;

export default userSlice.reducer;
