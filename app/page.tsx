import React from 'react'

const WebPage = () => {
  return (
      <div>
            <h1 className="gray">Welcome To my WebPage</h1>
            <ul className="black">
                <li>
                    <a href="/home" target="_blank">Home</a>
                </li>
                 <br />
                <li>
                    <a href="/about" target="_blank">About</a>
                </li>
                <br />
                <li>
                    <a href="/services" target="_blank">Services</a>
                </li>
                 <br />
                <li>
                    <a href="/contactus" target="_blank">Contact Us</a>
                </li>
               <br />
                <li>
                    <a href="/signup/signin" target="_blank">Nested LogIn Page</a>
                </li>
            </ul>
    </div>
  )
}

export default WebPage
