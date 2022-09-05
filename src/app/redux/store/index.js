import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "../features/contact";
import { chatReducer } from "../features/chats";
import { messagesReducer } from "../features/messages";
import { authReducer } from "../features/auth";
import { webRTCReducer } from "../features/webRTC";
import fetchApi from "../../api/fetch-api";


const Store = configureStore({
  reducer: {
    contact: contactReducer,
    chats: chatReducer,
    messages: messagesReducer,
    auth: authReducer,
    webRTC: webRTCReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: fetchApi,
      },
    }),
});

export default Store;
