import { app, BrowserWindow, ipcMain, shell } from "electron";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,

    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true, // required for contextBridge
      nodeIntegration: false, // disable Node.js integration for security
    },
  });

  if (process.env.VITE_DEV_SERVER_URL) {
    // Load the dev server if in development mode
    win.loadURL(process.env.VITE_DEV_SERVER_URL);

    // Open the DevTools.
    win.webContents.openDevTools();
  } else {
    // Load the index.html when not in development
    win.loadFile(path.join(__dirname, "../dist/index.html"));
  }
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// Handle ipcMain events
ipcMain.handle("openExternal", async (event, url) => {
  await shell.openExternal(url);
});
