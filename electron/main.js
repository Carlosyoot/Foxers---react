const { app, BrowserWindow, ipcMain, session  } = require('electron');
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


function createIsolatedWindow(sessionId) {
  const partitionName = `persist:session-${sessionId}`;

  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      partition: partitionName, // <--- AQUI!
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    }
  });

win.loadURL('http://localhost:5173/#/home');
}

ipcMain.on('open-application-window', (event, sessionId) => {
  createIsolatedWindow(sessionId);
});


app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
