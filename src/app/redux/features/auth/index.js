import { createSlice } from "@reduxjs/toolkit";
import { getSession } from "@/app/utils/sessionStorage";
import login from "./actions";
import getLogin from "./reducer";

const initialState = {
  loading: false,
  user: getSession("user"),
  isLoaded: getSession("user") !== null,
  error: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: {
    ...getLogin(login),
  },
});

export const authReducer = loginSlice.reducer;
