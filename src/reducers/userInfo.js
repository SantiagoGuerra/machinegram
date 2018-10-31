import userImg from '../assets/machinegram.png'

export const userInfo = (state = {
  fullName: 'username',
  profileImage: userImg
} , action) => {
  switch(action.type) {
    case('ADD_FULLNAME'):
      return Object.assign({}, state, {fullName: action.name})
    case('ADD_PROFILE_IMAGE'):
      return Object.assign({}, state, {profileImage: action.image})
    default:
      return state
  }
}