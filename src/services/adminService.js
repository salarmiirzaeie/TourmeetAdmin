import axios from 'axios'
const apiPort = 'http://localhost:3333/dashboard'
const gettoken = async () => {
  let token = await localStorage.getItem('token')
  return token
}
export const createTransactions = async (data) => {
  const res = axios
    .post(`${apiPort}/add-transactions`, data, {
      headers: {
        Authorization: `Bearer ${await gettoken()}`,
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
export const getRequestedPosts = async () => {
  const res = axios
    .get(`${apiPort}/requestedPosts`, {
      headers: {
        Authorization: `Bearer ${await gettoken()}`,
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
export const getalltrans = async () => {
  const res = axios
    .get(`${apiPort}/get-alltrans`, {
      headers: {
        Authorization: `Bearer ${await gettoken()}`,
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
export const getRequestedTours = async () => {
  const res = axios
    .get(`${apiPort}/requestedTours`, {
      headers: {
        Authorization: `Bearer ${await gettoken()}`,
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
export const getPermissions = async () => {
  const res = axios
    .get(`${apiPort}/get-permissions`, {
      headers: {
        Authorization: `Bearer ${await gettoken()}`,
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
export const addPermissions = async (data) => {
  const res = axios
    .put(`${apiPort}/add-permissions`, data, {
      headers: {
        'content-type': 'multipart/form-data',
        Authorization: `Bearer ${await gettoken()}`,
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
export const deleteleader = async (data) => {
  const res = axios
    .put(`${apiPort}/delete-leader`, data, {
      headers: {
        Authorization: `Bearer ${await gettoken()}`,
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
export const deletethumb = async (data) => {
  const res = axios
    .put(`${apiPort}/delete-thumb`, data, {
      headers: {
        Authorization: `Bearer ${await gettoken()}`,
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
export const setpair = async (data) => {
  const res = axios
    .put(`${apiPort}/pair-trans`, data, {
      headers: {
        Authorization: `Bearer ${await gettoken()}`,
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
export const getusersearch = async (data) => {
  const res = axios
    .get(`${apiPort}/getusersearch/${data}`, {
      headers: {
        Authorization: `Bearer ${await gettoken()}`,
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
export const getleaders = async () => {
  const res = axios
    .get(`${apiPort}/getleaders`, {
      headers: {
        Authorization: `Bearer ${await gettoken()}`,
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
export const getincome = async () => {
  const res = axios
    .get(`${apiPort}/get-income`, {
      headers: {
        Authorization: `Bearer ${await gettoken()}`,
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
