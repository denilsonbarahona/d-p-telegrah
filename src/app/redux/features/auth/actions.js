import { createAsyncThunk } from "@reduxjs/toolkit";

const login = createAsyncThunk("login/fetchlogin", async (data, thunkAPI) => {
  const {
    extra: { auth },
  } = thunkAPI;
  const response = await auth.Login(data, thunkAPI.signal);
  if (response.failing) {
    return thunkAPI.rejectWithValue(response.message);
  }
  return thunkAPI.fulfillWithValue(response.data);
});

export default login;
