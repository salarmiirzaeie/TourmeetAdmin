import axios from 'axios'
const apiPort = 'http://api.tourino-panel.ir/dashboard'
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
export const getRequestedTours = () => {
  const res = axios
    .get(`${apiPort}/requestedTours`, {
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
