import { createSlice } from "@reduxjs/toolkit";
import getMessages from "./actions";
import getMessagesReducers from "./reducer";

const initialState = {
  showMessageForm: false,
  contactRequest: {},
  loading: false,
  messages: [],
  error: null,
};

export const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    showMessageForm: (state, action) => {
      state.showMessageForm = true;
      state.contactRequest = action.payload;
    },
  },
  extraReducers: {
    ...getMessagesReducers(getMessages),
  },
});

export const { showMessageForm } = messagesSlice.actions;
export const messagesReducer = messagesSlice.reducer;
