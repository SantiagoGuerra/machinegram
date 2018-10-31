import React from 'react'

const Post = ({name, profilePicture, img}) => (
  <div className="col s12 m6">
  <div className="card">
    <div className="card-image">
      <img src={img} />
    </div>
    <div className="card-content" style={{display: 'flex', alignItems: 'center'}}> 
      {/* <span className="card-title">
        
      </span> */}
      <img src={profilePicture} className='circle' alt="user" style={{maxWidth: '50px'}}/>
      <p style={{padding: '16px'}}>{name}</p>
    </div>
  </div>
</div>
)

export default Post