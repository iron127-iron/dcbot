const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("api", {
  save: (data) => console.log("save", data)
});