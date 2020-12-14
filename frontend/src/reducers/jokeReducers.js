import {
  JOKE_LIST_REQUEST,
  JOKE_LIST_SUCCESS,
  JOKE_LIST_FAIL,
} from '../constants/jokeConstants'

export const jokeListReducer = (state = { jokes: [] }, action) => {
  switch (action.type) {
    case JOKE_LIST_REQUEST:
      return { loading: true, jokes: [] }
    case JOKE_LIST_SUCCESS:
      return { loading: false, jokes: action.payload }
    case JOKE_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
