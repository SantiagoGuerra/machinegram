import reducers from './reducers'

import {createStore} from 'redux'
const initialState = {
  signIn: false,
  user: {
    fullName: 'Nombre de usuario',
    profileImage: 'https://cars-sanjaime.com/images/users/default_user.png'
  },
  posts: [ 
  ],
  ui:{
    isLoading: false
  }
}

const store = createStore(
  reducers,
  initialState
)
export default store