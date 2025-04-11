console.log("✅ Preload script loaded");

const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  openExternal: (url) => {
    ipcRenderer.invoke("openExternal", url); // Call the openExternal ipcMain event and pass the URL
  },
});
