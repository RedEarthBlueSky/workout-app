import CreateDataContext from './CreateDataContext'
import trackerApi from '../api/Tracker'

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload }
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
const signup = dispatch => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post('/signup', { email, password })
      console.log(response.data)
    } catch (err) {
      console.log('Signup action error:  ', err)
      console.log(err.response.data)
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with Sign Up'
      })
    }
  }
}

export const { Provider, Context } = CreateDataContext(
  authReducer,
  { signin, signout, signup },
  { isSignedIn: false, errorMessage: '' }
)
