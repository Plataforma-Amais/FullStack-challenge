import React, { useContext, useEffect } from 'react';
import Context from '../../context/context';
import SchoolList from '../../components/schoolList';

const Classes = () => {
  const { classes, setClasses } = useContext(Context);

  useEffect(() => {
    // requestFindAllClasses();
  }, []);

  return (
    <div>
      <h1>Turmas da Escola</h1>
      {/* {!Classes.length ? (
        <h1>LOADING...</h1>
      ) : (
        <div>
          {Classes.map((school, i) => (
            <SchoolList key={i} school={school} />
          ))}
        </div>
      )} */}
    </div>
  );
};

export default Classes;
