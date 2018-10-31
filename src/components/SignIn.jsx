import React from 'react'
import mainLogo from '../assets/machinegram-light.png'
import {signIn} from '../firebase.auth'

const SignIn = () => (
  <div className='row' style={{height: '100vh', background: 'linear-gradient(45deg, #155fff 0%,#ff0bbe 83%)'}}>
    <div className='signin-container ' style={{display: 'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding: '32px'}}>
       <img src={mainLogo} style={{paddingTop: '128px', maxWidth: '100px'}}/>
       <p className='white-text center-align' style={{opacity: '0.8', fontSize: '2rem'}}>¡Únete para que puedas ver las fotos de tus amigos!</p>
       <button className='waves-effect waves-dark btn white black-text btn-large' style={{marginTop: '66px'}} onClick={signIn}> únete con google</button>
    </div>
  </div>
)

export default SignIn