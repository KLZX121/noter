const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld(
    'ipc',
    {
        openFile: () => ipcRenderer.invoke('dialog:openFile')
    }
);