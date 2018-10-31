import React from 'react'
import Logo from './Logo';
import User from './User'
import SignOut from './SignOut'

const NavBar = ({isLoading}) => (
  <nav>
    <div className="nav-wrapper white">
      <SignOut/>
      <Logo isLoading={isLoading}/>
      <User/>
    </div>
  </nav>
)

export default NavBar