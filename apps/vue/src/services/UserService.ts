import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000', // TODO
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getUsers() {
    return apiClient.get('/users')
  },
  getUser(id: string) {
    return apiClient.get(`/users/${id}`)
  },
}
