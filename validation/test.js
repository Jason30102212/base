const Validator = require('validator')
const isEmpty = require('./is-empty')

module.exports = function validateTestInput(data) {
  let errors = {}

  data.content = !isEmpty(data.content) ? data.content : ''

  if (Validator.isEmpty(data.content)) {
    errors.content = 'Content is required'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
