const {app, BrowserWindow} = require('electron')
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    titleBarOverlay: true
  })

  win.loadURL('http://192.168.0.54:8604/Carregando.html')
}

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});