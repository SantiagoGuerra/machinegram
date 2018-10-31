import React from 'react'
import {IoLogoGithub} from 'react-icons/io'
const User = () => (
  <ul id='nav-mobile' className="right purple-text">
    <li>
      <a href="./" className='white-text purple' >
        <IoLogoGithub style={{fontSize: '1em', transform: 'scale(2.3,2.3)'}}/>
      </a>
    </li>
  </ul>
)

export default User