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

export default getMessageReducers;
