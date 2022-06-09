import { createAsyncThunk } from "@reduxjs/toolkit";

export const getContact = createAsyncThunk(
  "contact/fetchContacts",
  async (email, thunkAPI) => {
    const {
      extra: { contact },
    } = thunkAPI;
    try {
      const response = await contact.getMyContacts(email);
      if (response.failing) {
        return thunkAPI.rejectWithValue(response.message);
      }
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = (state) => {
  state.contacts.push(state.contact);
};
