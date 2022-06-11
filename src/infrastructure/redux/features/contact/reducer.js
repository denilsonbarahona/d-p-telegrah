export const getContactReducer = (getContact) => {
  return {
    [getContact.pending]: (state) => {
      state.loading = true;
    },
    [getContact.fulfilled]: (state, action) => {
      state.contacts = action.payload;
      state.loading = false;
    },
    [getContact.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  };
};

export const createContactReducer = (createContact) => {
  return {
    [createContact.pending]: (state) => {
      state.loading = true;
    },
    [createContact.fulfilled]: (state, action) => {
      const {
        payload: { data, status },
      } = action;
      if (status === 200) state.contacts.push(data);
      if (status === 404) console.log("showing error");
      state.loading = false;
    },
    [createContact.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  };
};
