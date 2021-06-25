import React, { useContext, useEffect, useState } from 'react';
import Context from '../../context/context';
import { useParams } from 'react-router-dom';
import { findSchoolById, findAllClasses } from '../../services';
import ClassesList from '../../components/classesList';

const Classes = () => {
  const params = useParams();
  const { escolaId } = params;
  const [school, setSchool] = useState('');
  const { classes, setClasses } = useContext(Context);

  const requestGetSchoolById = async () => {
    const result = await findSchoolById(escolaId);
    setSchool(result);
  };

  const requestAllClasses = async () => {
    const result = await findAllClasses();
    const filterClassesBySchool = result.filter(
      ({ id_school }) => id_school === escolaId,
    );
    // console.log(filterClassesBySchool);
    setClasses(filterClassesBySchool);
  };

  useEffect(() => {
    requestGetSchoolById();
    requestAllClasses();
  }, []);

  return (
    <div>
      <h1>{`Turmas da ${school.name}`}</h1>
      {!classes.length ? (
        <h1>LOADING...</h1>
      ) : (
        <div>
          {classes.map((classe, i) => (
            <ClassesList key={i} classe={classe} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Classes;
