
import axios from 'axios'


const API = axios.create({baseURL: '  http://localhost:3000/'})


const getUser = () => API.get('users/')
const addUser = (payload) => API.post('users/', payload)


export { getUser , addUser}