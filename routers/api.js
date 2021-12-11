const express = require('express')
const router = express.Router()

router.post('/upload', (req, res) => {
    //TDB: add actual logic. 
    console.log('Endpoint for uploading videos')
})

router.get('/videos', (req, res) => {
    //TDB: add actual logic.
    res.send('Endpoint for retrieving all video information')
})

router.get('/videos/:videoId', (req, res) => {
    //TBD: add actual logic. 
    res.send(`Endpoint for getting video ${req.params.videoId}`)
})

module.exports = router