import { createSlice } from "@reduxjs/toolkit";
import { getContact, createContact } from "./actions";
import { getContactReducer, createContactReducer } from "./reducer";

const initialState = {
  loading: false,
  contacts: [],
};

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers: {
    ...getContactReducer(getContact),
    ...createContactReducer(createContact),
  },
});

/* export const { addContact } = contactSlice.actions; */

export const contactReducer = contactSlice.reducer;
