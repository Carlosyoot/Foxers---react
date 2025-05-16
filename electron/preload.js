// electron/preload.js
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  openApplicationWindow: (sessionId) => ipcRenderer.send('open-application-window', sessionId),
});
