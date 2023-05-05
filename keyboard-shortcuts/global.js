module.exports = (globalShortcut) => {
  // 注册全局快捷键
  globalShortcut.register("Alt+CommandOrControl+I", () => {
    console.log("Electron loves global shortcuts!");
  });
};
