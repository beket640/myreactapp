import React from 'react'
import "./Post.css"

export default function Post(props) {
  return (
    <section id="post">

          <section id="post-aboutuser">
            <div id="post-account-img"></div>
            <div id="post-username">
              <a href="">{props.postTitle}</a>
            </div>
          </section>
          
          <section id="post-content">
            <div id="post-content-img">
            <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/1ecde018e863e2aaee31f00a23378c35.jpe" alt=""/>
            </div>
          </section>

          <section id="post-info">
            <div id="post-views">1.5M views</div>
            <div id="post-description">{props.text}</div>
          </section>

        </section>
  )
}
