# Uptimerobots -Now you can connect your projects uptime.

## Setup
**Installation**
```js
npm install uptimerobots
```
**Website Uptime**
```js
const Uptime = require("uptimerobots")
Uptime.uptime("URL", "METHOD", timeout, console info? true/false)

// 1 Seconds = 1000
// 35 Seconds = 35000

/*
Example
const Uptime = require("uptimerobots")
Uptime.uptime("https://myghost.ninja", "GET", 35000, true)
*/
```
**Create HTTP Server**
```js
const Uptime = require("uptimerobots")
Uptime.httpServer("MESSAGE", PORT) // or Uptime.httpServer()

/* 
Example
const Uptime = require("uptimerobots")
Uptime.httpServer("Hellloo HTTP Server", 8080)
*/
```

**Create Express Server**
```js
const Uptime = require("uptimerobots")
Uptime.expressServer("MESSAGE", PORT) // or Uptime.expressServer()

/*
Example
const Uptime = require("uptimerobots")
Uptime.expressServer("Hellloo Express Server", 3000)
*/
```
