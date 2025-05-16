const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 860,
    height: 580,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // carregue aqui
      contextIsolation: true, // importante para segurança e usar contextBridge
      nodeIntegration: false,
    },
  });

  mainWindow.loadURL('http://localhost:5173'); // ou loadFile no prod
}

ipcMain.on('abrir-nova-janela', () => {
  const win = new BrowserWindow({
    width: 600,
    height: 400,
  });
  win.loadURL('https://google.com'); // ou seu caminho local
});

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
