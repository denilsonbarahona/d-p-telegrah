import { createAsyncThunk } from "@reduxjs/toolkit";
import { notifyUser } from "../../../socket/socket-actions";

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

export const sendMessage = createAsyncThunk(
  "chats/sendMessage",
  async (params, thunkAPI) => {
    const {
      extra: { chats },
    } = thunkAPI;
    const { chatID, message } = params;
    const response = await chats.sendMessage(chatID, message, thunkAPI.signal);
    if (response.failing) {
      return thunkAPI.rejectWithValue(response.message);
    }
    notifyUser("ldmYi4zkFvyCkQSlWqJ1", "1ahlUn1TI0a2DBajjJ7p");
    return thunkAPI.fulfillWithValue(response.data);
  }
);

export const createChat = createAsyncThunk(
  "chats/createChat",
  async (params, thunkAPI) => {
    const {
      extra: { chats },
    } = thunkAPI;
    const { id, message } = params;
    const response = await chats.createChat(id, message, thunkAPI.signal);
    if (response.failing) {
      return thunkAPI.rejectWithValue(response.message);
    }
    return thunkAPI.fulfillWithValue(response.data);
  }
);

export default getMessages;
