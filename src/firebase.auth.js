import firebase from 'firebase'
import 'firebase'
import store from './store'
import {userIsSigned} from './actions/'
import {addName} from './actions'
import {addProfilePic} from './actions'

export const signIn = () => {
  let provider = new firebase.auth.GoogleAuthProvider()

  firebase.auth().signInWithPopup(provider).then(result => {
    store.dispatch(userIsSigned(!!result.user))
    store.dispatch(addName(result.user.displayName))
    store.dispatch(addProfilePic(result.user.photoURL))
  })


}

export const signOut = () => {
  firebase.auth().signOut().then(result => {
    store.dispatch(userIsSigned(!!result.user))
  })
}

export const getUserName = () => (firebase.auth().currentUser.displayName)
export const getProfilePicUrl = () => (firebase.auth().currentUser.photoURL)