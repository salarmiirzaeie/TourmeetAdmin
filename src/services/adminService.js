import axios from 'axios'
const apiPort = 'http://localhost:3333/dashboard'
const token = localStorage.getItem('token')

export const getRequestedPosts = () => {
  const res = axios
    .get(`${apiPort}/requestedPosts`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      return response
    })
    .catch((err) => {
      return err.response
    })
  return res
}
