import React, { useContext, useEffect } from 'react';
import Context from '../../context/context';
import SchoolList from '../../components/schoolList';
import SchoolForm from '../../components/schoolForm';

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
      <section>
        <h1>Cadastre uma Nova escola</h1>
        <SchoolForm />
      </section>
    </div>
  );
};

export default Schools;
