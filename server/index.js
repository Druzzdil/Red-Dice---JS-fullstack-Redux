const express = require('express');
const path = require('path');
const app = express();
const publicDir = process.argv[2] || __dirname + '/public';

app.get("/", function (req, res) {
  res.sendFile(path.join(publicDir, "/index.html"));
});


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(port, 'app using port 3000')
})

