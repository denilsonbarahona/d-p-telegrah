import { createSlice } from "@reduxjs/toolkit";
import getChats from "./actions";
import getChatsReducers from "./reducer";

const initialState = {
  loading: false,
  chats: [],
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {},
  extraReducers: {
    ...getChatsReducers(getChats),
  },
});

export const chatReducer = chatSlice.reducer;
