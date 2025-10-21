import { configureStore } from "@reduxjs/toolkit";
import messagesReducer from '../redux/reducers/messages.reducer.js'
const store = configureStore({
    reducer: {
        messages: messagesReducer
    }
})
export default store