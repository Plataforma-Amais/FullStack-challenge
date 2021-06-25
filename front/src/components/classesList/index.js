import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../../context/context';

const CLassesList = ({ classe }) => {
  const history = useHistory();
  // const { requestDeleteSchool } = useContext(Context);

  return (
    <div>
      <button
        type='button'
        // onClick={() => history.push(`/${school._id}/turma`)}
      >
        <h2>{classe.name}</h2>
      </button>
      {/* <button onClick={() => requestDeleteSchool(school._id)}>X</button> */}
    </div>
  );
};

export default CLassesList;
