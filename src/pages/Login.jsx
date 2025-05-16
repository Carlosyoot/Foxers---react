import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../css/style-login.module.scss';

export default function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate('/dashboard');
  }

  return (
    <div className={styles.Container}>
      <div className={styles['Form-container']}>
        <h1>Faça seu login</h1>
        <div className={styles['Social-container']}>
          <button onClick={handleLogin}><i className="fab fa-google-plus-g"></i> Entre com Google</button>
          <span>Ou</span>
          <button><i className="fab fa-microsoft"></i> Entre com Microsoft</button>
        </div>
        <div className={styles['Contact-container']}>
          <p>Email corporativo?</p>
          <button>Entrar em contato</button>
        </div>
        <p className={styles['p-info']}>Foxers 1.0.1</p>
      </div>
      <div className={styles['Content-container']}>
        <h1>Ola, Foxers!</h1>
        <p>Insira seu email e embarque em uma aventura conosco</p>
      </div>
    </div>
  );
}
