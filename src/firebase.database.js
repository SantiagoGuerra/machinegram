import firebase from 'firebase'
import 'firebase'
import {addPost, uiLoading} from './actions'
import store from './store'
import {getUserName} from './firebase.auth'
import {getProfilePicUrl} from './firebase.auth'
import {isLoading} from './actions/'

export const loadPosts = () => {

  let callback = function(snap) {
    var data = snap.val();
    // displayMessage(snap.key, data.name, data.text, data.profilePicUrl, data.imageUrl);
    displayPost(snap.key, data.author.fullName, data.author.profilePicture, data.content.img)
  };

  firebase.database().ref('/posts/').on('child_added', callback);
  firebase.database().ref('/posts/').on('child_changed', callback);
}

const displayPost = (uuid, fullName, profilePicture, image) => {
  store.dispatch(addPost(uuid, fullName, profilePicture, image))
}

export const savePost = () => {
  // Add a new message entry to the Firebase Database.
  console.log(firebase.database().ref().push())
  return firebase.database().ref('/posts/').push({
    author: {
      fullName: getUserName(),
      profilePicture: getProfilePicUrl()
    },
    content: {
      img: 'https://www.wendywutours.co.uk/blog/wp-content/uploads/2018/04/chinalandscapesbanner-730x410.jpg'
    },
    uuid: firebase.database().ref().push().key
  }).catch(function(error) {
    console.error('Error writing new message to Firebase Database', error);
  });
}



export const saveImage = (file) => {
  // 1 - We add a message with a loading icon that will get updated with the shared image.
  firebase.database().ref('/posts/').push({
    
  }).then(function(messageRef) {
    store.dispatch(isLoading(true))
    // 2 - Upload the image to Cloud Storage.
    var filePath = firebase.auth().currentUser.uid + '/' + messageRef.key + '/' + file.name;
    let id = messageRef.key

    return firebase.storage().ref(filePath).put(file).then(function(fileSnapshot) {
      // 3 - Generate a public URL for the file.

      return fileSnapshot.ref.getDownloadURL().then((url) => {
        // 4 - Update the chat message placeholder with the image's URL.
        
        store.dispatch(isLoading(false))
        return messageRef.update({
          uuid: id,
          content: {
            img: url,
            storageUri: fileSnapshot.metadata.fullPath
          },
          author: {
            fullName: getUserName(),
            profilePicture: getProfilePicUrl()
          },
        });
      });
    });
  }).catch(function(error) {
    console.error('There was an error uploading a file to Cloud Storage:', error);
  });
}

