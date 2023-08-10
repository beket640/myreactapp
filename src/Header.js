import React from 'react'
import "./Header.css"

export default function Header() {
    return (
        <header>

        <div id="menu-button" onclick="menuDrop()"></div>
        <div id="account-img-header"></div>
        <div id="account-name">
          <p onclick="accountInfo()">Account</p>
        </div>

      </header>
    )
}
