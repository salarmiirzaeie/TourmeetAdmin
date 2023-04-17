import axios from 'axios'
const apiPort = 'http://localhost:3333/'
const gettoken = async () => {
  let token = await localStorage.getItem('token')
  return token
}
export const getIndex = () => {
  const res = axios
    .get(`${apiPort}`)
    .then((response) => {
      return response
    })
    .catch((err) => {
      return err.response
    })
  return res
}
export const getPost = (data) => {
  // //console.log(data)
  const res = axios
    .get(`${apiPort}post/${data}`, {})
    .then((response) => {
      // //console.log(response.data)

      return response
    })
    .catch((err) => {
      return err.response
    })
  return res
}
export const paymony = async data => {
  const res = axios
    .post(`${apiPort}paymony`, data)
    .then(response => {
      return response;
    })
    .catch(err => {
      return err.response;
    });
  return res;
};
export const verify = async data => {
  const res = axios
    .post(`${apiPort}varify`, data)
    .then(response => {
      return response;
    })
    .catch(err => {
      return err.response;
    });
  return res;
};
export const getcities = data => {
  const res = axios
    .get(`${apiPort}cities/${data}`)
    .then(response => {

      return response;
    })
    .catch(err => {
      return err.response;
    });
  return res;
};
export const getallcompany = async() => {
  const res = axios
    .get(`${apiPort}getallcamps`, {
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
export const getprovinces = () => {
  const res = axios
    .get(`${apiPort}provinces`)
    .then(response => {
      // //console.log(response.data)

      return response;
    })
    .catch(err => {
      return err.response;
    });
  return res;
};
