const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    movieName:{
        type: String,
        required:true
    },
    publishDate:{
        type: Date,
        required:true
    },
    duration:{
        type:String,
    },
    description:{
        type: String,
    },
    directors:{
        type: String,
        required:true
    },
    stars:{
        type: String,
        required:true
    },
    writers:{
        type: String,
    },
    coverImageName:{
        type: String,
        required:true
    },
    videoLink:{
        type: String,
        required:true
    },
    photos:{
        type: String,
    },
    createdAt:{
        type:Date,
        defalult: Date.now
    }
})

module.exports=mongoose.model('movie',movieSchema)