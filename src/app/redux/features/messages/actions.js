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

      console.log(response);
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
    const { contactId, chatID, message, sender } = params;
    const response = await chats.sendMessage(chatID, message, sender, thunkAPI.signal);
    if (response.failing) {
      return thunkAPI.rejectWithValue(response.message);
    }
    notifyUser(sender.id, contactId);
    return thunkAPI.fulfillWithValue(response.data);
  }
);

export const createChat = createAsyncThunk(
  "chats/createChat",
  async (params, thunkAPI) => {
    const {
      extra: { chats },
    } = thunkAPI;
    const { contactId, message, sender } = params;
    const response = await chats.createChat(contactId, message, sender, thunkAPI.signal);
    if (response.failing) {
      return thunkAPI.rejectWithValue(response.message);
    }
    notifyUser(sender.id, contactId);
    return thunkAPI.fulfillWithValue(response.data);
  }
);

export default getMessages;
