import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <h1>ROTAS</h1>
      <ul>
        <li>
          <Link to='/escolas'>ESCOLAS</Link>
        </li>
      </ul>
    </div>
  )
}

export default Login;
