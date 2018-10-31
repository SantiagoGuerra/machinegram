import {signIn} from './signIn'
import { post } from './post'
import {ui} from './ui'
import { userInfo } from './userInfo'
import { combineReducers } from 'redux';

export default combineReducers({
  signIn,
  post,
  userInfo,
  ui
})