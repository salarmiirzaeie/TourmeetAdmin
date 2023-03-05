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
export const getPermissions = () => {
  const res = axios
    .get(`${apiPort}/get-permissions`, {
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
export const addPermissions = (data) => {
  const res = axios
    .put(`${apiPort}/add-permissions`, data, {
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
export const deleteleader = (data) => {
  const res = axios
    .put(`${apiPort}/delete-leader`, data, {
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
export const getusersearch = (data) => {
  const res = axios
    .get(`${apiPort}/getusersearch/${data}`, {
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
export const getleaders = () => {
  const res = axios
    .get(`${apiPort}/getleaders`, {
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