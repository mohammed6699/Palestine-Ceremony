import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name: 'messages',
    initialState: {
        messages: [],
        pages: 1,
        totalPages: 1,
        error: null,
        loading: false
    },
    reducers: {
        // get all messages
        getMessagesStart: (state) => {
            state.error = null;
            state.loading = true;
        },
        getMessagesSuccess: (state, action) => {
            state.error = null;
            state.loading = false;
            state.messages = action.payload;
        },
        getMessagesFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        // add new messages
        getAddMessagesStart: (state) => {
            state.error = null;
            state.loading = true;
        },
        getAddMessagesSuccess: (state, action) => {
            state.error = null;
            state.loading = false;
            state.messages = [action.payload, ...state.messages];
        },
        getAddMessagesFail: (state, action) => {
            state.error = null;
            state.error = action.payload;
        }
    }
});
export const {getMessagesStart, getMessagesSuccess, getMessagesFail,
    getAddMessagesStart, getAddMessagesSuccess, getAddMessagesFail} = messageSlice.actions;
export default messageSlice.reducer;