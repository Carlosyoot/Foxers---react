import React from "react";
import { useEditMode } from "../../context/EditModeContext";
import classNames from "classnames";
import styles from "./Cards.module.scss";

export default function Cards({ user }) {
  const { isEditing } = useEditMode();

  return (
    <div className={classNames(styles.card, isEditing && styles.editing)}>
      <div className={styles.avatar}>
        <img src={user.avatarUrl} alt={`Avatar de ${user.name}`} />
      </div>

      <div className={styles.footer}>
        <span className={styles.name}>{user.name}</span>
      </div>

      <div className={classNames(styles.actions, isEditing && styles.visible)}>
        <button aria-label="Menu">
          <i className="fas fa-angle-down"></i>
        </button>
        <button aria-label="Editar">
          <i className="fas fa-pen"></i>
        </button>
        <button aria-label="Bloquear">
          <i className="fas fa-lock"></i>
        </button>
        <button aria-label="Excluir">
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
}
