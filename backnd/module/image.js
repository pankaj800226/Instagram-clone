const mongoose = require('mongoose')

const ImageSchema = new mongoose.Schema({
    image: {
        type: String
    },
    tital: {
        type: String
    },
})

const imageModel = mongoose.model('image', ImageSchema);

module.exports = imageModel

