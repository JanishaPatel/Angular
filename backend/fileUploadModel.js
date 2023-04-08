const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    }
})

const fileuploadSchema = mongoose.model('fileupload', schema)

module.exports = fileuploadSchema