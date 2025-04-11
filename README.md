# Spark

A starting point for Electron apps ⚡️

## 📋 &nbsp; Overview

- Built with [Vite](https://vite.dev)
- [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), and [Tailwind CSS](https://tailwindcss.com/) are built in

---

## 🔍 &nbsp; Preview

![Preview of Spark's default page](./assets/Default%20Page.png)

---

## 🛫 &nbsp; Setup

### Requirements

- [Node.js](https://nodejs.org/)
- npm (Comes with Node.js)
- Text Editor

**Notice**: [pnpm](https://pnpm.io/) and [yarn](https://yarnpkg.com/) are untested.

### Recommended

- [nvm](https://github.com/nvm-sh/nvm) &#8628;

```bash
nvm install 22
```

&emsp; &emsp; &#8595;

- Node.js Version 22.14.0 (or newer)
- npm Version 10.9.2 (or newer)

- [Visual Studio Code](https://code.visualstudio.com/)

**Notice**: If you would like to start from scratch please start with the steps in the [creating from scratch](#creating-from-scratch) section.

1. Clone the repository

1. Clone the repository

HTTPS

```bash
git clone https://github.com/jmayo-navitend/spark.git
```

SSH

```bash
git clone git@github.com:jmayo-navitend/Spark.git
```

GitHub CLI

```bash
gh repo clone jmayo-navitend/spark
```

2. Enter the repositories directory

```bash
cd spark
```

3. Install dependancies

```bash
npm install
```

4. Start the react server

```bash
npm run dev
```

5. Start a new terminal session

6. Enter the repositories directory

```bash
cd spark
```

7. Start the electron application

```bash
npm run electron
```

---

## 📦 &nbsp; Building

1. Enter the repositories directory

```bash
cd spark
```

2. Run the make command

```bash
npm run make
```

3. Check the `out` directory for the output

---

## 🛠️ &nbsp; Creating from Scratch

1. Create a Vite project with the React TypeScript template

```bash
npm create vite@latest . -- --template react-ts
```

2. Install dependancies

```bash
npm install
```

3. Install Electron

```bash
npm install electron --save-dev
```

4. Install Electron Forge

```bash
npm install @electron-forge/cli @electron-forge/maker-squirrel @electron-forge/maker-deb @electron-forge/maker-rpm @electron-forge/maker-zip --save-dev
```

5. Configure `package.json` for Electron Forge

```json
"scripts": {
    ...
    "start": "VITE_DEV_SERVER_URL=http://localhost:5173 electron-forge start",
    "package": "electron-forge package",
    "make": "npm run build && electron-forge make",
    "publish": "electron-forge publish",
    ...
},
```

6. Configure `vite.config.ts` for Electron Forge

```ts
export default defineConfig({
    ...
    base: "./",
    ...
});
```

7. Install Tailwind CSS

```bash
npm install tailwindcss @tailwindcss/vite
```

8. Configure `vite.config.ts` for Tailwind CSS

```ts
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    ...
    plugins: [react(), tailwindcss()],
    ...
});
```

9. Add Tailwind CSS import to `index.css`

```css
@import "tailwindcss";
```

10. Create an `electron` folder in the root directory

```bash
mkdir electron
```

11. Create a `main.js` and `preload.js` file in the `electron` folder

```bash
touch electron/main.js && touch electron/preload.js
```

12. Copy and paste this default code for `main.js` and `preload.js`

```js
// electron/main.js

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
```

```js
// electron/preload.js

console.log("✅ Preload script loaded");
```

13. Configure `package.json` for Electron

```json
...
"main": "electron/main.js",
...
```

14. Add the `out` folder to `.gitignore`

15. Go to the [Setup](#setup) section and **start at step four**
