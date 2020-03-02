import createDataContext from './CreateDataContext'

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state
  }
}

//  Sign Out action function
const signout = ({ dispatch }) => {
  return (
    //  somehow sign out
  )
}

//  Sign In action function
const signin = (dispatch) => {
  return ({ email, password }) => {
    //  Try to sign in
    //  Handle success by updating state
    //  Handle failure by showing error message
  }
}

//  Sign Up action function
const signup = (dispatch) => {
  return ({ email, password }) => {
    // make api request to sign up with that email and password

    // if we sign up, modify our state, and say we are authenticated

    // if signing up fails, error message
  }
}

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { isSignedIn: false }
)
