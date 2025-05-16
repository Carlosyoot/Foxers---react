// electron/preload.js
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  abrirNovaJanela: () => ipcRenderer.send('abrir-nova-janela')
});
