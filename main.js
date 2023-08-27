const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

//remove default menu
Menu.setApplicationMenu(null);

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, '/renderer/js/preload.js')
        }
    });

    win.loadFile('./renderer/html/dashboard.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});