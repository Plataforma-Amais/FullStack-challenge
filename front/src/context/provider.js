import React, { useState } from 'react';
import Context from './context';
import { findAllSchools, deleteSchool, createNewSchool } from '../services';

const Provider = ({ children }) => {
  const [schools, setSchools] = useState([]);
  const [classes, setClasses] = useState([]);

  const requestFindAllSchools = async () => {
    const result = await findAllSchools();
    if (!schools.length) setSchools(result);
  };

  const requestDeleteSchool = async id => {
    const deleted = await deleteSchool(id);
    // console.log(deleted.ok);
    if (deleted.ok) {
      const result = await findAllSchools();
      setSchools(result);
    }
  };

  const requestCreateSchool = async (data) => {
    const school = await createNewSchool(data);
    if (school) {
      const result = await findAllSchools();
      setSchools(result);
    }
  }

  const globalState = {
    schools,
    setSchools,
    requestDeleteSchool,
    requestFindAllSchools,
    requestCreateSchool,
    classes,
    setClasses,
  };

  return <Context.Provider value={globalState}>{children}</Context.Provider>;
};

export default Provider;
