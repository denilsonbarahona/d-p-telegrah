import { createAsyncThunk } from "@reduxjs/toolkit";

const getChats = createAsyncThunk(
  "chats/fetchChats",
  async (params, thunkAPI) => {
    const { id, name } = params;
    const {
      extra: { chats },
    } = thunkAPI;
    const response = await chats.getChats(id, name, thunkAPI.signal);
    if (response.failing) {
      return thunkAPI.rejectWithValue(response.message);
    }
    return thunkAPI.fulfillWithValue(response.data);
  }
);

export default getChats;
