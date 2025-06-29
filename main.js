const { app, BrowserWindow } = require('electron');

let mainWindow;


/*
var splash = new BrowserWindow({
     width: 500, 
     height: 300, 
     transparent: true, 
     frame: false, 
     alwaysOnTop: true 
});
*/

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, // Required for D3+Electron
      /*preload: path.join(__dirname, 'app/splash/preload.js')*/
    },
  });

  mainWindow.loadFile('app/splash/splash.html'); // Load your HTML file
});
/*
setTimeout(function () {
  splash.close();
  mainWindow.show();
}, 5000);
*/