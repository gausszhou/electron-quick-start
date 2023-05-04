const path = require("path");
const { app, BrowserWindow, ipcMain, nativeTheme } = require("electron");

require("./dark-mode/main")(ipcMain, nativeTheme);

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadFile("index.html");
};

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// quits an application entirely on exiting all windows

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

console.log("[info] hello this is main process");
