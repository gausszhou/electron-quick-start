console.log('[info] hello this is renderer process')
const information = document.getElementById('expose')
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`
