import { SIGN_IN } from '../constants/typeActions';

export const signIn = (state = false, action) => {
  switch(action.type) {
    case SIGN_IN:
      return state = action.content
    default:
      return state
  }
}