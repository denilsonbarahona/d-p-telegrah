import { createAsyncThunk } from "@reduxjs/toolkit";

export const getContact = createAsyncThunk(
  "contact/fetchContacts",
  async (email, thunkAPI) => {
    const {
      extra: { contact },
    } = thunkAPI;
    const response = await contact.getMyContacts(email, thunkAPI.signal);
    if (response.failing) {
      return thunkAPI.rejectWithValue(response.message);
    }
    return thunkAPI.fulfillWithValue(response.data);
  }
);

export const createContact = createAsyncThunk(
  "contact/createContact",
  async (contactData, thunkAPI) => {
    const {
      extra: { contact },
    } = thunkAPI;
    const response = await contact.createContact(contactData, thunkAPI.signal);
    if (response.failing) {
      return thunkAPI.rejectWithValue(response.message);
    }
    return thunkAPI.fulfillWithValue(response);
  }
);

export const updateContact = (state) => {
  state.contacts.push(state.contact);
};
