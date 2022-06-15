const getChatsReducers = (getChats) => {
  return {
    [getChats.pending]: (state) => {
      state.loading = true;
    },
    [getChats.fulfilled]: (state, action) => {
      state.chats = action.payload;
      state.loading = false;
    },
    [getChats.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  };
};

export default getChatsReducers;
