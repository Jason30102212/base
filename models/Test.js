const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const TestSchema = new Schema({
  content: {
    type: String,
    require: true
  }
})

module.exports = Test = mongoose.model('tests', TestSchema)
