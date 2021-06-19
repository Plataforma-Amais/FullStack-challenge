import * as yup from 'yup';

const required = 'Campo obrigatório.';
const invalid = 'Campo incorreto.';
const invalidEmail = 'Formato de email incorreto.';

const passwordLength = 6;

const login = yup.object().shape({
  email: yup.string().email(invalidEmail).required(required),
  password: yup.string().min(passwordLength, 'Campo de senha incorreto.')
    .required(required),
});

const register = yup.object().shape({
  name: yup.string().matches(/^[a-z ,.'-]{12,}$/i, invalid).required(required),
  email: yup.string().email(invalidEmail).required(required),
  password: yup.string().min(passwordLength, invalid).required(required),
});

const update = yup.object().shape({
  name: yup.string().matches(/^[a-z ,.'-]{12,}$/i, invalid).required(required),
});

export default { login, register, update };
