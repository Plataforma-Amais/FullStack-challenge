import React, { useContext, useEffect, useState } from 'react';
import Context from '../../context/context';
import { useParams } from 'react-router-dom';
import { findSchoolById } from '../../services';
import ClassesList from '../../components/classesList';
import ClassForm from '../../components/classForm';

const Classes = () => {
  const params = useParams();
  const { escolaId } = params;
  const [school, setSchool] = useState('');
  const { classes, requestFindAllClasses } = useContext(Context);

  const requestGetSchoolById = async () => {
    const result = await findSchoolById(escolaId);
    setSchool(result);
  };

  useEffect(() => {
    requestGetSchoolById();
    requestFindAllClasses(escolaId);
  }, []);

  return (
    <div>
      <h1>{`Turmas da ${school.name}`}</h1>
      {!classes.length ? (
        <p>Não existe turmas cadastradas</p>
      ) : (
        <div>
          {classes.map((classe, i) => (
            <ClassesList key={i} classe={classe} id_school={escolaId} />
          ))}
        </div>
      )}
      <section>
        <h1>Cadastre uma Nova escola</h1>
        <ClassForm id_school={escolaId} />
      </section>
    </div>
  );
};

export default Classes;
