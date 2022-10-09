import axios from 'axios'
const apiPort = 'http://localhost:3333/dashboard'
const token = localStorage.getItem('token')
export const createPost = (data) => {
  const res = axios
    .post(`${apiPort}/add-post`, data, {
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

export const myPosts = (data) => {
  const res = axios
    .get(`${apiPort}/getMyPosts/${data}`, {
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
export const getSinglePost = (data) => {
  // console.log(data)
  const res = axios
    .get(`${apiPort}/getsinglePost/${data}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      // console.log(response.data)

      return response
    })
    .catch((err) => {
      return err.response
    })
  return res
}
export const deletePost = (data) => {
  const res = axios
    .delete(`${apiPort}/delete-post/${data}`, {
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
export const editPost = (data) => {
  const res = axios
    .put(`${apiPort}/edit-post/${data.id}`, data.values, {
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

export const acceptPost = (data) => {
  console.log(data)
  const res = axios
    .put(`${apiPort}/accept-post`, data, {
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
export const addToGallery = (data) => {
  const res = axios
    .post(`${apiPort}/add-gallery`, data, {
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
export const joinTour = (data) => {
  const res = axios
    .put(`${apiPort}/join-tour`, data, {
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
export const getGalley = (data) => {
  const res = axios
    .get(`${apiPort}/get-gallery/${data}`, {
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
export const deletegallery= (data) => {
  const res = axios
    .delete(`${apiPort}/delete-gallery/${data}`, {
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