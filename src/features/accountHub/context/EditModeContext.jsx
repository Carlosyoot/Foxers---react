import { createContext, useContext, useState } from 'react';

const EditModeContext = createContext();

export function EditModeProvider({ children }) {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing(prev => !prev);
  const startEdit = () => setIsEditing(true);
  const stopEdit = () => setIsEditing(false);

  return (
    <EditModeContext.Provider value={{ isEditing, toggleEdit, startEdit, stopEdit }}>
      {children}
    </EditModeContext.Provider>
  );
}

export function useEditMode() {
  return useContext(EditModeContext);
}