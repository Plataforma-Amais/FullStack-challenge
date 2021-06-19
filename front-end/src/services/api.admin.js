import axios from 'axios';

const getUserById = async (payload) => {
  try {
    const headers = { authorization: payload.token };
    const localhost = process.env.HOSTNAME || 'localhost';

    const request = {
      method: 'get',
      url: `http://${localhost}:3001/admin/user/${payload.userId}`,
      headers,
    };

    const result = await axios(request);
    console.log('Admin getUserById: ', result);
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

const updateSale = async (payload) => {
  try {
    const localhost = process.env.HOSTNAME || 'localhost';
    const headers = { authorization: payload.token };
    const status = payload.status.toString();

    const request = {
      method: 'put',
      url: `http://${localhost}:3001/admin/sales/${payload.saleId}`,
      headers,
      data: { delivered: status },
    };

    const result = await axios(request);
    console.log('Admin upd sale: ', result);
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
    const localhost = process.env.HOSTNAME || 'localhost';
    const headers = { authorization: payload.token };

    const request = {
      method: 'get',
      url: `http://${localhost}:3001/admin/sales/`,
      headers,
    };

    const result = await axios(request);
    console.log('Admin get sales: ', result);
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
      url: `http://${localhost}:3001/admin/sales/${payload.saleId}`,
      headers,
    };

    const result = await axios(request);
    console.log('Admin getSaleById: ', result);
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
  getSales,
  getSaleById,
  updateSale,
  getUserById,
};
