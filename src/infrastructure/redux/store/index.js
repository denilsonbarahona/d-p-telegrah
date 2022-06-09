import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "../features/contact";
import fetchApi from "../../api/fetch-api";

const Store = configureStore({
  reducer: {
    contact: contactReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: fetchApi,
      },
    }),
});

export default Store;
