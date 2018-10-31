import React from 'react'
import mainLogo from '../assets/machinegram.png'


const Logo = ({isLoading}) => (
  <a href="./" className={`brand-logo center ${isLoading ? 'spin': ''}`}> <img src={mainLogo} alt="" style={{height:'20px', transform:'scale(2,2)'}}/></a>
)

export default Logo