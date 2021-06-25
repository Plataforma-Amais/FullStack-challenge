import React, { useState, useContext } from 'react';
import Context from '../../context/context';

const classForm = {
  name: '',
};

const ClassForm = ({ id_school }) => {
  const [form, setForm] = useState(classForm);
  const { requestCreateClass } = useContext(Context);

  const handleValueForm = ({ target }) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  const createNewClass = async () => {
    await requestCreateClass({ ...form, id_school }, id_school);
  };

  return (
    <form>
      <div>
        <label htmlFor='name'>Nome da Turma</label>
        <input
          type='text'
          name='name'
          id='name'
          value={form.name}
          onChange={e => handleValueForm(e)}
        />
      </div>
      <button type='button' onClick={createNewClass}>
        CADASTRAR
      </button>
    </form>
  );
};

export default ClassForm;
