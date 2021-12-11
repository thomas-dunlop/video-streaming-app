const express = require('express')
const fileUpload = require('express-fileupload');
const router = express.Router()

const crud = require('../db/crud')

router.post('/upload', (req, res) => {
    try {
        console.log('hit endpoint')
        crud.addVideo(req.files.file, req.body)
        res.status(201).send("Video successfuly added")
    } catch (err) {
        res.status(500).send(err)
    }
})

router.get('/videos', (req, res) => {
    //TDB: add actual logic.
    res.send('Endpoint for retrieving all video information')
})

router.get('/videos/:videoId', async (req, res) => {
    try {
        const video = await crud.getVideoById(req.params.videoId)
        res.status(200).send(video)
    } catch (err) {
        res.status(500).send(err)
    }
})

module.exports = router