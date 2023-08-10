import React from 'react'
import "./ProfileScript.js"
import "./Profile.css"

export default function Profile(props) {
    
    
    return (
        <section id="profile">
            <img src="https://lookyourbestbeyourbest.files.wordpress.com/2011/11/image-3.jpeg" alt="" />
            <div id="profile-info">
                <h2>Name : {props.surname} {props.name}</h2>
                <h3>Contact : {props.contact}</h3>
                <h3>Email : beket@gmail.com</h3>
            </div>
        </section>
    )
}