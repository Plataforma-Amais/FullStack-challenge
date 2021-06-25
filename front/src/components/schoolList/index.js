import React, { useContext } from 'react';
import Context from '../../context/context';

const SchoolList = ({ school }) => {
  const { requestDeleteSchool } = useContext(Context);

  return (
    <div>
      <button type='button'>
        <h2>{school.name}</h2>
        <p>{`Diretor: ${school.director}`}</p>
      </button>
      <button onClick={() => requestDeleteSchool(school._id)}>X</button>
    </div>
  );
};

export default SchoolList;
