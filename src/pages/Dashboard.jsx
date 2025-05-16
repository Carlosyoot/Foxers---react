import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../css/style-sessions.module.scss';

export default function Dashboard() {
  const [accounts, setAccounts] = useState([]);
  const navigate = useNavigate();

  const addAccount = () => {
    const newAccount = {
      id: Date.now(),
      name: `Conta com texto grande para teste com mais letras ${accounts.length + 1}`,
      avatar: `https://i.pravatar.cc/150?img=${accounts.length + 1}`
    };
    setAccounts([...accounts, newAccount]);
  };

  const selectAccount = (accountId) => {
    navigate('/home');
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className={styles.Container}>
      <div className={styles['Title-container']}>
        <img className={styles['Logo-container-image']} src="/images/logo.png" alt="Logo" />
      </div>
      <div className={styles['Accounts-container']}>
      <button onClick={handleLogout}><i className="fas fa-arrow-left"></i></button> 
      <h1>Selecione uma sessão</h1>
      <div className={styles['Accounts-grid']}>
        {accounts.map((account) => (
          <div
            key={account.id}
            className={styles['Account-item']}
            onClick={() => selectAccount(account.id)}
          >
            <div className={styles['Account-avatar']}>
              <img src={account.avatar} alt={account.name} />
            </div>
            <span className={styles['Account-name']}>{account.name}</span>
          </div>
        ))}

        {accounts.length < 3 && (
          <div
            className={`${styles['Account-item']} ${styles['Add-account']}`}
            onClick={addAccount}
          >
            <div className={styles['Account-avatar']}>
              <div className={styles['Add-icon']}>+</div>
            </div>
            <span className={styles['Account-name']}>Adicionar conta</span>
          </div>
        )}
      </div>
    </div>
    </div>
  );
}
