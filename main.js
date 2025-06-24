const { app, BrowserWindow } = require('electron');

let mainWindow;

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, // Required for D3+Electron
      contextIsolation: false, // Disable for simplicity (not recommended for production)
    },
  });

  mainWindow.loadFile('index.html'); // Load your HTML file
});