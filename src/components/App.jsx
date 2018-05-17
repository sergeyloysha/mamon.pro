import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div className="app__wrapper">
        <div className="app__container">
          <h1 className="app__name">mamon.</h1>
          <p className="app__desc app__desc_main">We're an independent development agency.</p>
          <p className="app__desc">We understand the intricacies of web development inside-out. That's why we build rock-solid Mobile and Web applications enriched with user-centered visual experiences.</p>
          <div className="app__control">
            <a href="mailto:hello@mamon.pro">Contact Us</a>
          </div>
        </div>
      </div>
    )
  }
}

export default App