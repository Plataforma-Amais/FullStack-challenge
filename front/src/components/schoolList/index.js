import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../../context/context';

const SchoolList = ({ school }) => {
  const { requestDeleteSchool } = useContext(Context);
  const history = useHistory();

  return (
    <div>
      <button type='button' onClick={ () => history.push(`/${school._id}/turma`) }>
        <h2>{school.name}</h2>
        <p>{`Diretor: ${school.director}`}</p>
      </button>
      <button onClick={() => requestDeleteSchool(school._id)}>X</button>
    </div>
  );
};

export default SchoolList;
