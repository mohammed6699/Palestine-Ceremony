import axios from 'axios'
const Messages_API = axios.create({
    baseURL: 'https://palestine-server-side.vercel.app/api/v1'
})
export default Messages_API;