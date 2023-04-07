import axios from 'axios'
const apiPort = 'https://api.tourmeet.ir/'
const token = localStorage.getItem('token')
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
  // console.log(data)
  const res = axios
    .get(`${apiPort}post/${data}`, {})
    .then((response) => {
      // console.log(response.data)

      return response
    })
    .catch((err) => {
      return err.response
    })
  return res
}
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
export const getprovinces = () => {
  const res = axios
    .get(`${apiPort}provinces`)
    .then(response => {
      // console.log(response.data)

      return response;
    })
    .catch(err => {
      return err.response;
    });
  return res;
};
