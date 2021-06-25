import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../../context/context';

const CLassesList = ({ classe, id_school }) => {
  const history = useHistory();
  const { requestDeleteClasses } = useContext(Context);

  return (
    <div>
      <button
        type='button'
        onClick={() => history.push(`/${school._id}/turma`)}>
        <h2>{classe.name}</h2>
      </button>
      <button onClick={() => requestDeleteClasses(classe._id, id_school)}>
        X
      </button>
    </div>
  );
};

export default CLassesList;
