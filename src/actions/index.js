import { SIGN_IN } from '../constants/typeActions'

export const userIsSigned = (state) => ({
  type: SIGN_IN,
  content: state
})

export const addName = name => ({
  type: 'ADD_FULLNAME',
  name
})

export const addProfilePic = url => ({
  type: 'ADD_PROFILE_IMAGE',
  image: url
})

export const addPost = (uuid, fullName, profilePicture, image) => ({
  type: 'ADD_POST',
  uuid,
  fullName,
  profilePicture,
  image
})

export const isLoading = state => ({
  type: 'IS_LOADING',
  state
})
