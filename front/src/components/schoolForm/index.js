import React, { useState, useContext } from 'react';
import Context from '../../context/context';

const schoolForm = {
  schoolName: '',
  directorName: '',
};

const SchoolForm = () => {
  const [form, setForm] = useState(schoolForm);
  const { requestCreateSchool } = useContext(Context);

  const handleValueForm = ({ target }) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  const createNewSchool = async () => {
    await requestCreateSchool(form);
  };

  return (
    <form>
      <div>
        <label htmlFor='school-name'>Nome da Escola</label>
        <input
          type='text'
          name='schoolName'
          id='school-name'
          value={form.schoolName}
          onChange={e => handleValueForm(e)}
        />
      </div>
      <div>
        <label htmlFor='director-name'>Nome do Diretor</label>
        <input
          type='text'
          name='directorName'
          id='director-name'
          value={form.directorName}
          onChange={e => handleValueForm(e)}
        />
      </div>
      <button type='button' onClick={createNewSchool}>
        CADASTRAR
      </button>
    </form>
  );
};

export default SchoolForm;
