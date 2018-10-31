import React from 'react'
import Post from './Post'
const Feed = ({posts}) => (
  <div className="row">
    {
      posts.map(post => <Post name={post.author.fullName} profilePicture = {post.author.profilePicture} key={post.uuid} img={post.content.img}/>)
  }
  </div>
) 

export default Feed