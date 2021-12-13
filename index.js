const express = require('express')
const path = require("path");
require('dotenv').config()
const fileUpload = require('express-fileupload');
var cors = require('cors')
const dbo = require('./db/conn')
const app = express()
const port = 3000

app.use(express.json());
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/'
}));
app.use(cors())
app.use(express.static(path.join(__dirname, "build")));

const apiRouter = require('./routers/api')

app.use('/api', apiRouter)

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./build/index.html"));
})

dbo.connectToServer(function (err) {
  if (err) {
    console.error(err);
    process.exit();
  }

  app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });
});