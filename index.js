// -- Link Uptime --
const axios = require('axios');
const { Database } = require("ervel.db")
const db = new Database("./uptime_database.json")
exports.uptime = function (url, method, time, consoleinfo) {
const urlhere = url || "undf"
if(urlhere.startsWith("https://")){
  db.set("url", url)
  db.set("method", method || "get")
console.log('\x1b[32m', 'Uptime Link Starting')
  function request() {
  axios({
  method: method || "get",
  url: url || "https://google.com",
})
  .then(function (response) {
    if(consoleinfo){
      //Console Info: True
    db.add(`${db.get("url")}count`, 1)
    console.log(
      '\x1b[37m', "[", '\x1b[36m', `${db.get("url")}`,'\x1b[37m', "]",'\x1b[32m', "Requested", '\x1b[33m'+db.get(`${db.get("url")}count`));
  } else {
      // Console Info: False
  }
  })

  .catch(function (error) {
    console.log('\x1b[31m', 'An error occurred. Use get/post in a proper url or method.')
    process.exit(0)
  })
}
  setInterval(request, time || 20000);

} else if(urlhere.startsWith("http://")){
  db.set("url", url)
  db.set("method", method || "get")
console.log('\x1b[32m', 'Uptime Link Starting')
    function request() {
  axios({
  method: method || "get",
  url: url || "https://google.com",
})
  .then(function (response) {
    if(consoleinfo){
      //Console Info: True
    db.add(`${db.get("url")}count`, 1)
    console.log(
      '\x1b[37m', "[", '\x1b[36m', `${db.get("url")}`,'\x1b[37m', "]",'\x1b[32m', "Requested", '\x1b[33m'+db.get(`${db.get("url")}count`));
  } else {
      // Console Info: False
  }
  })

  .catch(function (error) {
    console.log('\x1b[31m', 'An error occurred. Use get/post in a proper url or method.')
    process.exit(0)
  })
}
  setInterval(request, time || 20000);
} else
{
    console.log('\x1b[31m', 'https:// and http:// is required at the beginning of the link.')

}
}
// -- Create HTTP Server --
exports.httpServer = function (message, port) {
  console.log('\x1b[32m', 'HTTP Server Creating')
const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end(message || 'Hello, World!');
}

const server = http.createServer(requestListener);
server.listen(port || 8080, () => {
  console.log('\x1b[32m','Running HTTP Server on Port','\x1b[37m', '[','\x1b[34m',`${port || 8080}`,'\x1b[37m',']');
});
}
// -- Create Express Server --
exports.expressServer = function (message, port) {
console.log('\x1b[32m', 'Express Server Creating')
const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send(message || 'Hello, World!');
});
app.listen(port || 8080, () => {
console.log('\x1b[32m','Running Express Server on Port','\x1b[37m', '[','\x1b[34m',`${port || 8080}`,'\x1b[37m',']');
});
}
