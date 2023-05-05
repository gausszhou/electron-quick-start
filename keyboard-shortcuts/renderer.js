// 在渲染进程中处理快捷键
document.getElementById("keyboard-shortcuts").innerHTML = `
<p>Hit Alt+Shift+I on Windows, or Opt+Cmd+I on mac to see a message printed to the console.</p>
<p>Hit any key with this window focused to see it captured here.</p>
<div>
  <span>Last Key Pressed: </span>
  <span id="last-keypress"></span>
</div>
<p>Hit Ctrl+I to see a message printed to the console.</p>
`;

let timer = null;
function handleKeyPress(event) {
  // You can put code here to handle the keypress.
  document.getElementById("last-keypress").innerText = event.key;
  console.log(`You pressed ${event.key}`);
  if (timer) clearTimeout(timer);
  timer = setTimeout(() => {
    document.getElementById("last-keypress").innerText = "";
  }, 1000);
}

window.addEventListener("keyup", handleKeyPress, true);
