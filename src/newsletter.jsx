import React from 'react'
import "./newsletter.css"

const NewsLetter = () => {
  return (
    <>
      <div className="newsLetter_box">
        <div className="newsLetter_content">

      <h1>NewsLetter</h1>
      <p>Sign up to receive updates on new arrivals and special offers.</p> <br />
      <input type="text" placeholder='Enter your e-mail address'/>
      <button>Submit</button>
        </div>

      </div>
    </>
  )
}

export default NewsLetter