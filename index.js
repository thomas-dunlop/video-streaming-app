const express = require('express')
require('dotenv').config()
const fileUpload = require('express-fileupload');
var cors = require('cors')
const dbo = require('./db/conn')
const app = express()
const port = 3000

app.use(express.json());
app.use(fileUpload());
app.use(cors())

const apiRouter = require('./routers/api')

app.use('/api', apiRouter)

app.get('/', (req, res) => {
    res.send('Welcome to Homepage')
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