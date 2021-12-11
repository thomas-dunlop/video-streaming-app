const dbo = require('./conn');
const fs = require('fs');
const mongodb = require('mongodb');

const addVideo = async (file, body) => {
    const dbConnect = dbo.getDb();

    var bucket = new mongodb.GridFSBucket(dbConnect, {
        bucketName: 'videos'
      })

    await fs.createReadStream(file.name)
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
    const video = await dbConnect.collection('videos').findOne({id: id})

    if (video) {
        return video
    } else {
        throw "Video not found"
    }
}

module.exports = {
    addVideo,
    getVideoById
}