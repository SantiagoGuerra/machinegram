export const ui = (state = {}, action) => {
  switch(action.type) {
    case('IS_LOADING'):
      return Object.assign({}, state, {isLoading: action.state})
    default:
      return state
  }
}