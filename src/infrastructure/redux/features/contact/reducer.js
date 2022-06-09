const getContactReducer = (getContact) => {
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

export default getContactReducer;
