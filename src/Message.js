import React from 'react'

export default function Message(props) {
  return (
    <div className={props.user}>
        {props.message}
    </div>
  )
}
