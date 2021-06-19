import axios from 'axios';

const createSale = async (payload) => {
  try {
    const headers = { authorization: payload.token };
    const localhost = process.env.HOSTNAME || 'localhost';

    const request = {
      method: 'post',
      url: `http://${localhost}:3001/sales/create`,
      headers,
      data: payload.order,
    };

    const result = await axios(request);
    console.log('User create sale: ', result);
    return result.data;
  } catch (error) {
    if (error.response) {
      // Request made -> server responded with a status code !== 2xx
      console.log(error.response.data);
      return error.response.data;
    }
    if (error.request) {
      // Request made -> server NOT responded
      // `error.request` is an instance of XMLHttpRequest in browser
      //  and an instance of http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in the setting up of request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);
  }
};

const getSaleById = async (payload) => {
  try {
    const headers = { authorization: payload.token };
    const localhost = process.env.HOSTNAME || 'localhost';

    const request = {
      method: 'get',
      url: `http://${localhost}:3001/sales/${payload.saleId}`,
      headers,
    };

    const result = await axios(request);
    console.log('User get sale by Id: ', result);
    return result.data;
  } catch (error) {
    if (error.response) {
      // Request made -> server responded with a status code !== 2xx
      console.log(error.response.data);
      return error.response.data;
    }
    if (error.request) {
      // Request made -> server NOT responded
      // `error.request` is an instance of XMLHttpRequest in browser
      //  and an instance of http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in the setting up of request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);
  }
};

const getSales = async (payload) => {
  try {
    const headers = { authorization: payload.token };
    const localhost = process.env.HOSTNAME || 'localhost';

    const request = {
      method: 'get',
      url: `http://${localhost}:3001/sales`,
      headers,
    };

    const result = await axios(request);
    console.log('User get sales: ', result);
    return result.data;
  } catch (error) {
    if (error.response) {
      // Request made -> server responded with a status code !== 2xx
      console.log(error.response.data);
      return error.response.data;
    }
    if (error.request) {
      // Request made -> server NOT responded
      // `error.request` is an instance of XMLHttpRequest in browser
      //  and an instance of http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in the setting up of request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);
  }
};

export default {
  createSale,
  getSales,
  getSaleById,
};
