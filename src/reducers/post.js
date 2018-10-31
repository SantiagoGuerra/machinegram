export const post = (state = [], action) => {
  switch(action.type) {
    case 'ADD_POST':
      return state.concat({
        uuid: action.uuid,
        author: {
          fullName: action.fullName,
          profilePicture: action.profilePicture,
        },
        content: {
          img: action.image
        }      
      })
    default:
      return state
  }
}