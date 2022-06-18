import { createAsyncThunk } from "@reduxjs/toolkit";

const blank = "(blank)";
const getMessages = createAsyncThunk(
  "chats/fetchMessages",
  async (params, thunkAPI) => {
    const {
      extra: { chats },
    } = thunkAPI;
    const { id, page } = params;
    if (id !== blank) {
      const response = await chats.getMessageFromChat(
        id,
        page,
        thunkAPI.signal
      );
      if (response.failing) {
        return thunkAPI.rejectWithValue(response.message);
      }
      return thunkAPI.fulfillWithValue(response.data);
    }
    return thunkAPI.fulfillWithValue([]);
  }
);

export default getMessages;
