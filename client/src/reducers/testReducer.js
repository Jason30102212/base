import { GET_TEST_CONTENTS } from '../actions/types'

const initialState = {}

export default function( state = initialState, action ) {
  switch (action.type) {
    case GET_TEST_CONTENTS:
      return action.payload;
    default:
      return state;
  }
}
