import axios from 'axios'
const apiPort = 'http://localhost:3333/users'
const token = localStorage.getItem('token')

export const login = (data) => {
  const res = axios
    .post(`${apiPort}/login`, data)
    .then((response) => {
      return response
    })
    .catch((err) => {
      return err.response
    })
  return res
}
export const register = (data) => {
  const res = axios
    .post(`${apiPort}/register`, data)
    .then((response) => {
      return response
    })
    .catch((err) => {
      return err.response
    })
  return res
}
export const resetPassword = (data) => {
  const res = axios
    .post(`${apiPort}/reset-password/${token}`, data, {
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
export const acceptTour = async (data) => {
  console.log(data)
  const res = await axios
    .put(`${apiPort}/accept-tour`, data, {
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
export const editProfile = (data) => {
  const res = axios
    .post(`${apiPort}/edit-profile`, data, {
      headers: {
        'content-type': 'multipart/form-data',
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