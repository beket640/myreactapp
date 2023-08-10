import React from 'react'
import "./Footer.css"

export default function Footer() {
  return (
    <footer>
        <div class="footer-blocks">
          <p>Связаться с нами:</p>
          <a href="">Email:my@email.com</a>
          <a href="">Contacts:+7 777 777 77 77</a>
        </div>
        <div class="footer-blocks">
          <h3>MyReactApp</h3>
        </div>
        <div class="footer-blocks">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/640px-WhatsApp_icon.png" alt="" />
          <img src="https://cdn-icons-png.flaticon.com/512/733/733635.png" alt="" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="" />
        </div>
      </footer>
  )
}
