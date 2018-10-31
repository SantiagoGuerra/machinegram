import React from 'react'
import {IoIosLogOut} from 'react-icons/io'
import {signOut} from '../firebase.auth'

const SignOut = () => (
  <ul id='nav-mobile' className="right purple-text">
    <li>
      <a href="./" className='white-text purple' onClick={signOut}>
        <IoIosLogOut style={{fontSize: '1em', transform: 'scale(2.3,2.3)'}}/>
      </a>
    </li>
  </ul>
)

export default SignOut