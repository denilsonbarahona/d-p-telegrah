import { createSlice } from "@reduxjs/toolkit";
import { getContact, addContact as newContact } from "./actions";
import getContactReducer from "./reducer";

const initialState = {
  loading: false,
  error: "",
  contacts: [],
};

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact: newContact,
  },
  extraReducers: {
    ...getContactReducer(getContact),
  },
});

export const { addContact } = contactSlice.actions;

export const contactReducer = contactSlice.reducer;
