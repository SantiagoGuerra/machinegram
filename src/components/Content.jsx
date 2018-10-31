import React from 'react'
import Float from './Float'
import Feed from './Feed'
const Content = ({posts}) => (
  <div className='container' style={{marginTop:'16px'}}>
    <Feed posts={posts}/>
    <Float/>
  </div>
)

export default Content