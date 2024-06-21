const { app, BrowserWindow } = require('electron/main');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 768,
    height: 1366,
    frame: false,
    alwaysOnTop: true,
    center: true,
    closable: false,
    kiosk: true,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
    }
  });
  win.loadURL('http://localhost:3000');
};

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
