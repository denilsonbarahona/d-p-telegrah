import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "../features/contact";
import { chatReducer } from "../features/chats";
import { messagesReducer } from "../features/messages";
import { authReducer } from "../features/auth";
import fetchApi from "../../api/fetch-api";

const Store = configureStore({
  reducer: {
    contact: contactReducer,
    chats: chatReducer,
    messages: messagesReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: fetchApi,
      },
    }),
});

export default Store;
