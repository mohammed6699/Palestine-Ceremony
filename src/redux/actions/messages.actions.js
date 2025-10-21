import Messages_API from "../../instance/API_INSTANCE";
import { getAddMessagesFail, getAddMessagesStart, getAddMessagesSuccess, getMessagesFail, getMessagesStart, getMessagesSuccess } from "../reducers/messages.reducer"

export const getAllMessages = () => async(dispatch) => {
    try {
        dispatch(getMessagesStart());
        const {data} = await Messages_API.get('/messages');
        dispatch(getMessagesSuccess(data.data))
    } catch (error) {
        dispatch(getMessagesFail(error.response?.data?.message || 'Error getting the messages'))
    }
}

// add new messages
export const addNewMessages = (newData) => async(dispatch) => {
    try {
        dispatch(getAddMessagesStart());
        const formData = new FormData();
        formData.append('name', newData.name);
        formData.append('body', newData.body);
        formData.append('email', formData.email);
        formData.append('reason', formData.reason);
        const {data} = await Messages_API.post('/send', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        })
        dispatch(getAddMessagesSuccess(data.data))
    } catch (error) {
        dispatch(getAddMessagesFail(error.response?.data?.message || 'Error getting the messages'))
    }
}