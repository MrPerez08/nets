const { app, BrowserWindow, ipcMain } = require('electron');
const { spawn } = require('child_process');
const path = require('path');

let flaskProcess;

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    }
  });

  // Load the frontend (from Flask in dev, or static in production)
  if (process.env.NODE_ENV === 'development') {
    win.loadURL('http://localhost:5000');  // Flask server
  } else {
    win.loadFile(path.join(__dirname, '../frontend/index.html'));
  }

  // Start Flask backend
  flaskProcess = spawn('python', ['../backend/server.py']);

  // Kill Flask when Electron closes
  win.on('closed', () => {
    flaskProcess.kill();
  });
}

app.whenReady().then(createWindow);