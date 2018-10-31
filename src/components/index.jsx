import React from 'react'
import SignIn from './SignIn'
import MainApp from './MainApp'
import {connect} from 'react-redux'
import { loadPosts} from '../firebase.database'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      signed: true
    }
  }

  componentDidMount() {
    loadPosts()
  }

  render() {

    return(
      this.props.sign
        ? <MainApp posts={this.props.posts} isLoading={this.props.isLoading}/>
        : <SignIn/>
    )
  }
}

const mapState = state => ({
  sign: state.signIn,
  posts: state.post,
  userInfo: state.userInfo,
  isLoading: state.ui.isLoading
})


export default connect(mapState)(App)