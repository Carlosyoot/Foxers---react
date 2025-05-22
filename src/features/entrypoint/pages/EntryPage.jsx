import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Entry.module.scss';

export default function Entrada() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/dashboard');
  };

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Faça seu login</h1>
        <div className={styles.social}>
          <button onClick={handleLogin}>
            <i className="fab fa-google-plus-g"></i> Entre com Google
          </button>
          <span>Ou</span>
          <button>
            <i className="fab fa-microsoft"></i> Entre com Microsoft
          </button>
        </div>
        <div className={styles.contact}>
          <p>Email corporativo?</p>
          <button>Entrar em contato</button>
        </div>
        <p className={styles.version}>Foxers 1.0.1</p>
      </div>
      <div className={styles.background}>
        <h1>Olá, Foxers!</h1>
        <p>Insira seu email e embarque em uma aventura conosco</p>
      </div>
    </>
  );
}
