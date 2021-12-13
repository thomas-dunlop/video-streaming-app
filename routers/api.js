const express = require('express')
const router = express.Router()
const dbo = require('../db/conn');
const mongodb = require('mongodb');
const crud = require('../db/crud')

router.post('/upload', async (req, res) => {
  try {
    await crud.addVideo(req.files.file, req.body)
    res.status(201).send("Video successfuly added")
  } catch (err) {
    res.status(500).send(err)
  }
})

router.get('/videos', async (req, res) => {
  try {
    const videos = await crud.getAllVideos();
    res.status(201).send(videos)
  } catch (err) {
    res.status(404).send(err)
  }
})

router.get('/videos/:videoId', async (req, res) => {
  try {
    const dbConnect = dbo.getDb();

    var bucket = new mongodb.GridFSBucket(dbConnect, {
      bucketName: 'videos'
    })

    const video = await crud.getVideoById(req.params.videoId)

    bucket.openDownloadStream(mongodb.ObjectId(req.params.videoId)).pipe(res)
  } catch (err) {
    res.status(404).send(err)
  }
})

module.exports = router