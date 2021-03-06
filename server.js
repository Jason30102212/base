const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')
const path = require('path')
const crypto = require('crypto')

// API routes go here
const test = require('./routes/api/test')
const users = require('./routes/api/users')

const app = express()

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// DB Config
let db
if(process.env.NODE_ENV === 'production'){
  db = "mongodb+srv://test:"+process.env.mongodb_password+"@cluster0.czudk.mongodb.net/"+process.env.mongodb_name+"?retryWrites=true&w=majority"
  console.log("NODE_ENV. db variable is: ", db);
} else {
  db = require('./config/keys').mongoURI
}

// Connect to mongoose
mongoose
  .connect(db, {useNewUrlParser: true})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

// Passport middleware
app.use(passport.initialize())

// Use Routes
app.use('/api/test', test)
app.use('/api/users', users)

// Passport Config
require('./config/passport')(passport)


// Server static assets in production
if(process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const port = process.env.PORT || 5000

app.listen(port,  () => console.log(`Server running on port ${port}`))
