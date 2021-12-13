const dbo = require('./conn');
const fs = require('fs');
const mongodb = require('mongodb');

const addVideo = async (file, body) => {
  const dbConnect = dbo.getDb();

  var bucket = new mongodb.GridFSBucket(dbConnect, {
    bucketName: 'videos'
  })

  await fs.createReadStream(file.tempFilePath)
    .pipe(
      bucket.openUploadStream(file.name, {
        metadata: {
          "name": body.name,
          "value": body.value
        }
      })
    )
}

const getVideoById = async (id) => {
  const dbConnect = dbo.getDb();
  const video = await dbConnect.collection('videos.files').findOne(mongodb.ObjectId(id))

  if (video) {
    return video
  } else {
    throw new Error("Video not found")
  }
}

const getVideosByQuery = async (query) => {
  const dbConnect = dbo.getDb();
  const videos = await dbConnect.collection('videos.files').find(query).toArray()

  if (videos) {
    return videos
  } else {
    throw new Error("Video not found")
  }
}

module.exports = {
  addVideo,
  getVideoById,
  getVideosByQuery
}