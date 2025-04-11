console.log("✅ Preload script loaded");

const { contextBridge } = require("electron");

contextBridge.executeInMainWorld("electron", {
  // Expose a function or variable to the main world
});
