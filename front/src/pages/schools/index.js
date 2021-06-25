import React, { useContext, useEffect } from 'react';
import Context from '../../context/context';
import SchoolList from '../../components/schoolList';

const Schools = () => {
  const { schools, requestFindAllSchools } = useContext(Context);

  useEffect(() => {
    requestFindAllSchools();
  }, []);

  return (
    <div>
      <h1>ESCOLAS</h1>
      {!schools.length ? (
        <h1>LOADING...</h1>
      ) : (
        <div>
          {schools.map((school, i) => (
            <SchoolList key={i} school={school} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Schools;
