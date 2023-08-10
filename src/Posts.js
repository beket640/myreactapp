import React from 'react'
import Post from './Post'

export default function Posts(props) {
  return (
    <div className='posts'>
        <Post id={props.posts[0].id} text={props.posts[0].text} postTitle={props.posts[0].postTitle}/>
        <Post id={props.posts[1].id} text={props.posts[1].text} postTitle={props.posts[1].postTitle}/>
        <Post id={props.posts[2].id} text={props.posts[2].text} postTitle={props.posts[2].postTitle}/>
        <Post id={props.posts[3].id} text={props.posts[3].text} postTitle={props.posts[3].postTitle}/>
    </div>
  )
}
