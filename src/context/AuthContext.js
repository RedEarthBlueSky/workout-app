import { AsyncStorage } from 'react-native'
import CreateDataContext from './CreateDataContext'
import trackerApi from '../api/Tracker'

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload }
    case 'sign_up':
      return { errorMessage: '', token: action.payload }
    default:
      return state
  }
}

//  Sign Out action function
const signout = ({ dispatch }) => {
  // return (
  //   //  somehow sign out
  // )
}

//  Sign In action function
const signin = dispatch => {
  return ({ email, password }) => {
    //  Try to sign in
    //  Handle success by updating state
    //  Handle failure by showing error message
  }
}

//  Sign Up action function
const signup = dispatch => async ({ email, password }, callback) => {
  try {
    const response = await trackerApi.post('/signup', { email, password })
    await AsyncStorage.setItem('token', response.data.token)
    dispatch({
      type: 'sign_up',
      payload: response.data.token
    })

    //  if we have successfully signed up the new user
    //  completed our dispatch, let's fire the call back
    //  to navigate to mainFlow

    if (callback) {
      callback()
    }
  } catch (err) {
    console.log('Signup action error:  ', err)
    console.log('Error response data:  ', err.response.data)
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with Sign Up'
    })
  }
}

export const { Provider, Context } = CreateDataContext(
  authReducer,
  { signin, signout, signup },
  { token: null, errorMessage: '' }
)
