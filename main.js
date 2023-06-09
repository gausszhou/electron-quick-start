const path = require("path");
const { app, BrowserWindow, ipcMain, nativeTheme, Menu, MenuItem, globalShortcut, Notification } = require("electron");

const darkMoe = require("./dark-mode/main")(ipcMain, nativeTheme);
const menu = require("./keyboard-shortcuts/main")(Menu, MenuItem);


Menu.setApplicationMenu(menu)

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1200,
    height: 600,
    alwaysOnTop: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  })

  win.loadFile("index.html");
  win.webContents.openDevTools();

  win.webContents.on('before-input-event', (event, input) => {
    if (input.control && input.key.toLowerCase() === 'i') {
      console.log('Pressed Control+I')
      event.preventDefault()
    }
  })

};

const NOTIFICATION_TITLE = '标题'
const NOTIFICATION_BODY = '来自主要进程的通知'

function showNotification () {
  const notify = new Notification({ title: NOTIFICATION_TITLE, body: NOTIFICATION_BODY })
  notify.show();
}

app.whenReady().then(() => {
  // 全局快捷键
  const global = require("./keyboard-shortcuts/global")(globalShortcut);
  createWindow();
  showNotification()
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

// quits an application entirely on exiting all windows
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

console.log("[info] hello this is main process");
