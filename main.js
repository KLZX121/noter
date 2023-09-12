const { app, BrowserWindow, Menu, dialog, ipcMain } = require('electron');
const path = require('path');

//remove default menu
Menu.setApplicationMenu(null);

function bootApp() {
    ipcMain.handle('dialog:openFile', handleFileOpen);
    createWindow();
    
    function createWindow() {
        const win = new BrowserWindow({
            width: 800,
            height: 600,
            webPreferences: {
                preload: path.join(__dirname, '/renderer/js/preload.js')
            }
        });
        
        win.loadFile('./renderer/html/dashboard.html');

        win.webContents.openDevTools();
    }

    async function handleFileOpen() {
        const { canceled, filePaths } = await dialog.showOpenDialog()
        if (!canceled) {
            return filePaths[0]
        }
    }
}

app.whenReady().then(bootApp);


app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});