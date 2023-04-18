import axios from 'axios'
const apiPort = 'http://localhost:3333/users'
const gettoken = async () => {
  let token = await localStorage.getItem('token');
  return token;
};
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
export const changePassword = async data => {
  const res = axios
    .post(`${apiPort}/changepassword`, data, {
      headers: {
        // 'content-type': 'multipart/form-data',
        Authorization: `Bearer ${await gettoken()}`,
      },
    })
    .then(response => {
      return response;
    })
    .catch(err => {
      return err.response;
    });
  return res;
};
export const resetPassword = async (data) => {
  const res = axios
    .post(`${apiPort}/reset-password/${await gettoken()}`, data, {
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
export const acceptTour = async (data) => {
  //console.log(data)
  const res = await axios
    .put(`${apiPort}/accept-tour`, data, {
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
export const editProfile = async (data) => {
  const res = axios
    .post(`${apiPort}/edit-profile`, data, {
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
export const userProfile = async () => {
  const res = axios
    .get(`${apiPort}/profile`, {
      headers: {
        Authorization: `Bearer ${await gettoken()}`,
      },
    })
    .then(response => {
      return response;
    })
    .catch(err => {
      return err.response;
    });
  return res;
};
export const uploadprofilephoto = async data => {
  const res = await axios
    .post(`${apiPort}/uploadphoto`, data, {
      headers: {
        Authorization: `Bearer ${await gettoken()}`,
        'content-type': 'multipart/form-data',
      },
    })
    .then(response => {
      return response;
    })
    .catch(err => {
      return err.response;
    });
  return res;
};
export const deleteprofile = async data => {
  const res = await axios
    .delete(`${apiPort}/deleteProfile/${data}`, {
      headers: {
        Authorization: `Bearer ${await gettoken()}`,
      },
    })
    .then(response => {
      return response;
    })
    .catch(err => {
      return err.response;
    });
  return res;
};
export const forgetPassword = data => {
  const res = axios
    .post(`${apiPort}/forget-password`, data)
    .then(response => {
      return response;
    })
    .catch(err => {
      return err.response;
    });
  return res;
};
export const reserPassword = async data => {
  const res = axios
    .post(`${apiPort}/reset-password`, data, {
      headers: {
        // 'content-type': 'multipart/form-data',
        Authorization: `Bearer ${await data.token}`,
      },
    })
    .then(response => {
      return response;
    })
    .catch(err => {
      return err.response;
    });
  return res;
};
export const recievecode = async data => {
  const res = axios
    .post(`${apiPort}/recievecode`, data)
    .then(response => {
      return response;
    })
    .catch(err => {
      return err.response;
    });
  return res;
};
