document.getElementById('dark-mode').innerHTML =
`<p>Current theme source: <strong id="theme-source">System</strong></p>
<button id="toggle-dark-mode">Toggle Dark Mode</button>
<button id="reset-to-system">Reset to System Theme</button>`

document.getElementById("toggle-dark-mode").addEventListener("click", async () => {
  const isDarkMode = await window.darkMode.toggle();
  document.getElementById("theme-source").innerHTML = isDarkMode ? "Dark" : "Light";
});

document.getElementById("reset-to-system").addEventListener("click", async () => {
  await window.darkMode.system();
  document.getElementById("theme-source").innerHTML = "System";
});
