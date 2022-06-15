import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "../features/contact";
import { chatReducer } from "../features/chats";
import fetchApi from "../../api/fetch-api";

const Store = configureStore({
  reducer: {
    contact: contactReducer,
    chats: chatReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: fetchApi,
      },
    }),
});

export default Store;
