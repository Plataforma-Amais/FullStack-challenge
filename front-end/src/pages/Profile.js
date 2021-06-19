import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { yupSchemas, handleSaveUser } from '../utils';

import AppContext from '../context/app.context';
import { Topbar, TextInput, SubmitButton } from '../components';
import '../styles/Profile.css';

export default function Profile() {
  const { tokenContext: { token, setToken } } = useContext(AppContext);
  const history = useHistory();
  const [name, setName] = useState(token.name);
  const [disableBtn, setDisableBtn] = useState(true);
  const [success, setSuccess] = useState(false);

  const handleNameInput = (target) => setName(target.value);

  const submit = async (e) => {
    e.preventDefault();

    const payload = { ...token, name };
    const result = await handleSaveUser(payload, setToken, history);
    if (result.success) setSuccess(true);
  };

  useEffect(() => {
    const validateForm = async () => yupSchemas.update.validate({ name })
      .then((valid) => (valid.name) && setDisableBtn(false))
      .catch((error) => {
        if (disableBtn === false) setDisableBtn(true);
        return error;
      });

    const nameChanged = (name.normalize() !== token.name.normalize());
    if (!nameChanged) setDisableBtn(true);
    if (nameChanged) validateForm();
  }, [name, token, disableBtn]);

  return (
    <section>
      <Topbar title="Meu perfil" />
      <form onSubmit={ submit } className="profile-form">
        <fieldset>
          <legend>Registro</legend>
          <TextInput
            name="name"
            testId="profile"
            value={ name }
            callback={ handleNameInput }
          />
          <TextInput
            name="email"
            testId="profile"
            value={ token.email }
            readonly
          />
          <SubmitButton type="profile" disabled={ disableBtn } />
        </fieldset>
      </form>
      { (success) ? <p>Atualização concluída com sucesso.</p> : null }
    </section>
  );
}
