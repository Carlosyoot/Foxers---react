require('electron-reload')(__dirname, {
  electron: require('path').join(__dirname, '..', 'node_modules', '.bin', 'electron'),
  awaitWriteFinish: true,
});

const { app, BrowserWindow, ipcMain, session, Menu } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 860,
    height: 580,
    webPreferences: {
      //preload: path.join(__dirname, 'preload.js'), 
      contextIsolation: true, 
      nodeIntegration: false,
    },
  });
  //Menu.setApplicationMenu(null);
  mainWindow.loadURL('http://localhost:5173'); 
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});