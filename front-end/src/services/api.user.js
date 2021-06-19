import axios from 'axios';

const user = async (action, payload) => {
  try {
    const localhost = process.env.HOSTNAME || 'localhost';
    let endpoint = '';
    switch (action) {
    case 'register':
      endpoint = 'user/register';
      break;
    case 'login':
      endpoint = 'login';
      break;
    case 'update':
      endpoint = 'user/edit';
      break;
    default: return null;
    }

    const method = (action === 'update') ? 'put' : 'post';
    const headers = { authorization: payload.token };

    const request = {
      method,
      url: `http://${localhost}:3001/${endpoint}`,
      data: payload,
      headers,
    };
    const result = await axios(request);
    console.log('User request: ', result);
    if (result.data) return result.data;
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      return error.response.data;
    }
    if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);
  }
};

export default user;
