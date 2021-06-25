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

const findSchoolById = id => {
  const options = {
    method: 'GET',
    url: `${localhost}/escola/${id}`,
  };

  return axios
    .request(options)
    .then(response => response.data)
    .catch(error => error.data);
};

const createNewSchool = ({ schoolName, directorName }) => {
  const options = {
    method: 'POST',
    url: `${localhost}/escola`,
    headers: { 'Content-Type': 'application/json' },
    data: { name: schoolName, director: directorName },
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

const findAllClasses = () => {
  const options = { method: 'GET', url: `${localhost}/turmas` };

  return axios
    .request(options)
    .then(response => response.data)
    .catch(error => error.data);
};

const deleteClasses = id => {
  const options = {
    method: 'DELETE',
    url: `${localhost}/turma/${id}`,
  };

  return axios
    .request(options)
    .then(response => response.data)
    .catch(error => error.data);
};

const createNewClass = ({ name, id_school }) => {
  const options = {
    method: 'POST',
    url: `${localhost}/turma`,
    headers: { 'Content-Type': 'application/json' },
    data: { name, id_school },
  };

  return axios
    .request(options)
    .then(response => response.data)
    .catch(error => error.data);
};

export {
  findAllSchools,
  createNewSchool,
  deleteSchool,
  findSchoolById,
  findAllClasses,
  deleteClasses,
  createNewClass,
};
