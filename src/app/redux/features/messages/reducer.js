const getMessageReducers = (getMessage) => {
  return {
    [getMessage.pending]: (state) => {
      state.loading = true;
    },
    [getMessage.fulfilled]: (state, action) => {
      state.messages = action.payload;
      state.loading = false;
    },
    [getMessage.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  };
};

export const sendMessageReducer = (sendMessage) => {
  return {
    [sendMessage.pending]: (state) => {
      state.loading = true;
    },
    [sendMessage.fulfilled]: (state, action) => {
      state.loading = false;
      state.messages = action.payload;
    },
    [sendMessage.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  };
};

export const createChatReducer = (createChat) => {
  return {
    [createChat.pending]: (state) => {
      state.loading = true;
    },
    [createChat.fulfilled]: (state, action) => {
      state.loading = false;
      state.messages = action.payload;
    },
    [createChat.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  };
};

export default getMessageReducers;
