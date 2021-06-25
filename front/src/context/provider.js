import React, { useState } from 'react';
import Context from './context';
import {
  findAllSchools,
  deleteSchool,
  createNewSchool,
  findAllClasses,
  deleteClasses,
  createNewClass,
} from '../services';

const Provider = ({ children }) => {
  const [schools, setSchools] = useState([]);
  const [classes, setClasses] = useState([]);

  // SCHOOLS
  const requestFindAllSchools = async () => {
    const result = await findAllSchools();
    if (!schools.length) setSchools(result);
  };

  const requestDeleteSchool = async id => {
    const deleted = await deleteSchool(id);
    if (deleted.ok) {
      const result = await findAllSchools();
      setSchools(result);
    }
  };

  const requestCreateSchool = async data => {
    const school = await createNewSchool(data);
    if (school) {
      const result = await findAllSchools();
      setSchools(result);
    }
  };

  // CLASSES
  const filterClass = (result, escolaId) => {
    const filterClassesBySchool = result.filter(
      ({ id_school }) => id_school === escolaId,
    );
    setClasses(filterClassesBySchool);
  };

  const requestFindAllClasses = async escolaId => {
    const result = await findAllClasses();
    if (result) {
      filterClass(result, escolaId);
    } else {
      setClasses([]);
    }
  };

  const requestCreateClass = async (data, escolaId) => {
    const classResult = await createNewClass(data);
    if (classResult) {
      const result = await findAllClasses();
      filterClass(result, escolaId);
    }
  };

  const requestDeleteClasses = async (id, escolaId) => {
    const deleted = await deleteClasses(id);
    if (deleted.ok) {
      const result = await findAllClasses();
      filterClass(result, escolaId);
    }
  };

  const globalState = {
    schools,
    setSchools,
    requestDeleteSchool,
    requestFindAllSchools,
    requestCreateSchool,
    classes,
    setClasses,
    requestFindAllClasses,
    requestDeleteClasses,
    requestCreateClass,
  };

  return <Context.Provider value={globalState}>{children}</Context.Provider>;
};

export default Provider;
