const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');

const app = express();
const port = 5500;

const root = path.join(__dirname);

// app.use(express.static('./'));
app.use(serveStatic(root));
app.listen(port, () => {
  console.log(`Serve is started: %c http://localhost:${port}`,'color:#2580ff;');
})