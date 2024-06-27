const mongoose = require('mongoose');

// mongoose.connect("mongodb://127.0.0.1:27017/questions")

const questionSchema = new mongoose.Schema({
    topic:{
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        required: true
    },
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
})
module.exports = mongoose.model('Question', questionSchema);