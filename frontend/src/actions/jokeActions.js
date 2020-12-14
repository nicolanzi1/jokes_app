import axios from 'axios'
import {
  JOKE_LIST_REQUEST,
  JOKE_LIST_SUCCESS,
  JOKE_LIST_FAIL,
} from '../constants/jokeConstants'

export const listJokes = () => async (dispatch) => {
  try {
    dispatch({ type: JOKE_LIST_REQUEST })

    const { data } = await axios.get('/api/jokes')

    dispatch({
      type: JOKE_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: JOKE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
