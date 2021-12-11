const express = require('express')
const app = express()
const port = 3000

const apiRouter = require('./routers/api')

app.use('/api', apiRouter)
app.get('/', (req, res) => {
    res.send('Welcome to Homepage')
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})