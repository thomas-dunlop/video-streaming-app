const express = require('express')
require('dotenv').config()
const path = require("path");
const fileUpload = require('express-fileupload');
const cors = require('cors')
const dbo = require('./db/conn')
const app = express()


const port = process.env.PORT || 3000

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