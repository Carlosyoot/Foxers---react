import React from "react";
import { EditModeProvider } from "../context/EditModeContext";
import logo from '../assets/logo-without-background-border.png';



export default function AccountHub(){





    return(
    <EditModeProvider>
        <div className="wrapper">
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
        </div>
    </EditModeProvider>

    )
}