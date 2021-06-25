import axios from 'axios';

const localhost = 'http://localhost:3001';

const findAllSchools = () => {
  return axios
    .request({
      method: 'GET',
      url: `${localhost}/escolas`,
    })
    .then(response => response.data)
    .catch(error => error.data);
};

const createNewSchool = data => {
  const options = {
    method: 'POST',
    url: `${localhost}/escola`,
    headers: { 'Content-Type': 'application/json' },
    data,
  };

  return axios
    .request(options)
    .then(response => response.data)
    .catch(error => error.data);
};

const deleteSchool = id => {
  const options = {
    method: 'DELETE',
    url: `${localhost}/escola/${id}`,
  };

  return axios
    .request(options)
    .then(response => response.data)
    .catch(error => error.data);
};

export { findAllSchools, createNewSchool, deleteSchool };
