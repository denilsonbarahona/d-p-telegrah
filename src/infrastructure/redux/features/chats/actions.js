import { createAsyncThunk } from "@reduxjs/toolkit";
import chatDomain from "@domain/entities/chats";

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
    const { formatChats } = chatDomain;
    return thunkAPI.fulfillWithValue(formatChats(response.data));
  }
);

export default getChats;
