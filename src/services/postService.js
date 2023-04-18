import axios from 'axios'
const apiPort = 'https://api.tourmeet.ir/dashboard'
const gettoken = async () => {
  let token = await localStorage.getItem('token')
  return token
}
export const createPost = async (data) => {
  const res = axios
    .post(`${apiPort}/add-post`, data, {
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
export const setCity = async (data) => {
  const res = axios
    .post(`${apiPort}/setcampCity`, data, {
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

export const myPosts = async () => {
  const res = axios
    .get(`${apiPort}/getMyPosts`, {
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
export const getSinglePost = async (data) => {
  // //console.log(data)
  const res = axios
    .get(`${apiPort}/getsinglePost/${data}`, {
      headers: {
        Authorization: `Bearer ${await gettoken()}`,
      },
    })
    .then((response) => {
      // //console.log(response.data)

      return response
    })
    .catch((err) => {
      return err.response
    })
  return res
}
export const deletePost = async (data) => {
  const res = axios
    .delete(`${apiPort}/delete-post/${data}`, {
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
export const editPost = async (data) => {
  const res = axios
    .put(`${apiPort}/edit-post/${data.id}`, data.values, {
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

export const acceptPost = async (data) => {
  const res = axios
    .put(`${apiPort}/accept-post`, data, {
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
export const addleader = async (data) => {
  const res = axios
    .put(`${apiPort}/add-leader`, data, {
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
export const addToGallery = async (data) => {
  const res = axios
    .post(`${apiPort}/add-gallery`, data, {
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

export const joinTour = async (data) => {
  const res = axios
    .put(`${apiPort}/join-tour`, data, {
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
export const getCampGallery = data => {
  const res = axios
    .get(`${apiPort}/getCampGallery/${data}`)
    .then(response => {
      return response;
    })
    .catch(err => {
      return err.response;
    });
  return res;
};

export const deletegallery = async (data) => {
  const res = axios
    .delete(`${apiPort}/delete-gallery/${data}`, {
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
