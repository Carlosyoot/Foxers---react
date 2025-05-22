import React, { useState } from "react";
import { EditModeProvider, useEditMode } from "../context/EditModeContext";
import Cards from "../components/Cards/Cards";

function useFakeUserData(id = 1) {
  return {
    id,
    name: `Usuário ${id}`,
    avatarUrl: `https://i.pravatar.cc/150?img=${10 + id}`,
  };
}

function AccountHubContent() {
  const { isEditing, toggleEdit } = useEditMode();
  const [users, setUsers] = useState([useFakeUserData()]);

  function addUser() {
    setUsers((oldUsers) => [
      ...oldUsers,
      useFakeUserData(oldUsers.length + 1),
    ]);
  }

  return (
    <>
      <button onClick={toggleEdit}>
        {isEditing ? "Parar edição" : "Ativar edição"}
      </button>

      <button onClick={addUser} style={{ marginLeft: 10 }}>
        Adicionar usuário
      </button>

      {users.map((user) => (
        <Cards key={user.id} user={user} />
      ))}
    </>
  );
}

export default function AccountHub() {
  return (
    <EditModeProvider>
      <AccountHubContent />
    </EditModeProvider>
  );
}


/*<div className="wrapper">
            <div className="titleContainer">
              <h1>FOXERS</h1>
              <img className="logoImageContainer"
                src={logo}
                alt="Logo"
              />
            </div>

            <div className="accountsContainer">
              <div className="headerAccounts">
                <button className="returnButton">
                  <i className="fas fa-arrow-left" />
                </button>
                <button className="editButton">
                  <i className="fas fa-gear" />
                </button>
              </div>
            </div>
            <h1>Selecione uma sessão</h1>
        </div>*/