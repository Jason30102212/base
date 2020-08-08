import axios from 'axios'
import { GET_TEST_CONTENTS } from './types'

export const getTestContents = () => dispatch => {
  axios
    .get('/api/test/getcontent')
    .then(res => dispatch({type: GET_TEST_CONTENTS, payload: res.data}))
}

export const updateTestContent = (content) => dispatch => {
  axios
    .post('/api/test/changecontent', {content: content})
    .then(res => dispatch(getTestContents()))
}
