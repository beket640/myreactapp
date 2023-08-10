import React from 'react'
import "./Post.css"
import "./Chat.css"
import Message from './Message'

export default function Chat() {
    let message=[
        {
            message:"Привет!",
            user:"chat-message-info1"
        },
        {
            message:"Привет!",
            user:"chat-message-info2"
        },
        {
            message:"Как дела?",
            user:"chat-message-info1"
        },
        {
            message:"Все хорошо",
            user:"chat-message-info2"
        },
        {
            message:"Сам как?",
            user:"chat-message-info2"
        },
        {
            message:"Нормально.",
            user:"chat-message-info1"
        }
    ]
    return (
        <section id="chat">
            <section id="post-aboutuser">
                <div id="post-account-img"></div>
                <div id="post-username">
                    <a href="">Account</a>
                </div>
            </section>
            <div id="chat-messages">
                <Message message={message[0].message} user={message[0].user}/>
                <Message message={message[1].message} user={message[1].user}/>
                <Message message={message[2].message} user={message[2].user}/>
                <Message message={message[3].message} user={message[3].user}/>
                <Message message={message[4].message} user={message[4].user}/>
                <Message message={message[5].message} user={message[5].user}/>
            </div>
        </section>
    )
}
