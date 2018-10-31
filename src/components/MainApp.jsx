import React from 'react'
import NavBar from './NavBar'
import Content from './Content'


const MainApp = ({
  posts,
  userInfo,
  isLoading
}) => (
  <React.Fragment>
    <NavBar userInfo={userInfo} isLoading={isLoading}/>
    <Content posts={posts}/>
  </React.Fragment>
)

export default MainApp