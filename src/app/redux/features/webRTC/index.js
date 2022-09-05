import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    remoteStream: null,
    localStream: null,
    beggingCall: false,
    receivingCall: false,
};

const webRTCSlice = createSlice({
    name: "webRTC",
    initialState,
    reducers: {
      AddLocalStreamToStore: (state, action) => {
        state.localStream = action.payload;
      }, 
      AddRemoteStreamToStore: (state, action) => {
        state.remoteStream = action.payload;
      },
      SetBeggingCall: (state, action) => {
        state.beggingCall = action.payload;
      },
      SetReceivingCall: (state, action) => {
        state.receivingCall = action.payload;
      }
    }
});

export const {
    AddLocalStreamToStore,
    AddRemoteStreamToStore,
    SetBeggingCall,
    SetReceivingCall
} = webRTCSlice.actions;
export const webRTCReducer = webRTCSlice.reducer;