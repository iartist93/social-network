import { createSlice } from "@reduxjs/toolkit";

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
  }
});

export const selectUsers = (state) => state.users.list;
export const { addUserPost } = userSlice.actions;

export default userSlice.reducer;
