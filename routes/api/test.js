const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const passport = require('passport')

// Test model
const Test = require('../../models/Test')

// Validation
const validateTestInput = require('../../validation/test')

// @route     POST api/test/setup
// @desc      Post setup data for test
// @access    Public
router.post('/setup', (req, res) => {
  Test.findOne().then(test => {
    if(test) {
      return res.json('Setup already initialised')
    } else {
      new Test({content: "This is the content"}).save().then(test => res.json(test))
    }
  })
  .catch(err => res.status(400).json(err))
})

// @route     GET api/test/getcontent
// @desc      Get content
// @access    Public
router.get('/getcontent', (req, res) => {
  Test.find()
    .then(tests => res.json(tests))
    .catch(err => res.status(404).json({ notestsfound: 'No tests found' }))
})

// @route     POST api/test/changecontent
// @desc      Update test content in database
// @access    Public
router.post('/changecontent', (req, res) => {
  Test.findOne()
    .then(test =>
      test.updateOne({content: req.body.content})
    )
    .then(test => res.json(test))
    .catch(err => res.status(404).json(err))
})

module.exports = router
