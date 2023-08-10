import React from 'react'
import Nav from './Nav'
import Posts from './Posts'
import "./Main.css"
import Profile from './Profile'

export default function Main() {
  let posts=[
    {
      id:1,
      text:"beket",
      postTitle:"Title1"
    },
    {
      id:2,
      text:"123",
      postTitle:"Title2"
    },
    {
      id:3,
      text:"ME",
      postTitle:"Title3"
    },
    {
      id:4,
      text:"Hello",
      postTitle:"Title4"
    }
  ]
  return (
    <main>
        <Posts posts={posts} />
    </main>
  )
}
