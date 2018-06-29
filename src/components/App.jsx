import React, { Component } from 'react'

import logo from 'resources/images/mamon-logo.svg'
import thumb1 from 'resources/images/thumbs/vadim_karacharski.jpeg'
import thumb2 from 'resources/images/thumbs/sergey_loysha.jpg'
import thumb3 from 'resources/images/thumbs/andrey_pitunov.jpg'
import thumb4 from 'resources/images/thumbs/evgeny_yakimovich.jpeg'
import thumb5 from 'resources/images/thumbs/tomash_svorobovich.jpg'
import thumb6 from 'resources/images/thumbs/dmitry_shindin.jpg'
import thumb8 from 'resources/images/thumbs/alex_tukaylo.jpg'
import thumb9 from 'resources/images/thumbs/artyom_khomyakov.jpeg'

const members = [
  {
    id: 1,
    firstName: 'Vadim',
    lastName: 'Karacharski',
    position: 'Managing Director',
    thumb: thumb1
  }, {
    id: 2,
    firstName: 'Sergey',
    lastName: 'Loysha',
    position: 'Technology Director',
    thumb: thumb2
  }, {
    id: 3,
    firstName: 'Andrey',
    lastName: 'Pitunov',
    position: 'Front-end Developer',
    thumb: thumb3
  }, {
    id: 8,
    firstName: 'Alex',
    lastName: 'Tukaylo',
    position: 'Front-end Developer',
    thumb: thumb8
  }, {
    id: 6,
    firstName: 'Dmitry',
    lastName: 'Shindin',
    position: 'Back-end Developer',
    thumb: thumb6
  }, {
    id: 9,
    firstName: 'Artyom',
    lastName: 'Khomyakov',
    position: 'Back-end Developer',
    thumb: thumb9
  },
  // {
  //   id: 7,
  //   firstName: 'Andrey',
  //   lastName: 'Yatsenko',
  //   position: 'Back-end Developer',
  //   thumb: null
  // },
  {
    id: 4,
    firstName: 'Evgeny',
    lastName: 'Yakimovich',
    position: 'Product Designer',
    thumb: thumb4
  },
  {
    id: 5,
    firstName: 'Tomash',
    lastName: 'Svorobovich',
    position: 'Designer',
    thumb: thumb5
  }
]

const Member = (props) => {

  const { member } = props

  return (
    <div className="app-member">
      <div className="app-member__thumb">
        { member.thumb ? <img src={ member.thumb } alt={ member.firstName + ' ' + member.lastName }/> : null }
      </div>
      <div className="app-member__info">
        <div className="app-member__name">{ member.firstName }</div>
        <div className="app-member__position">{ member.position }</div>
      </div>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div className="app__wrapper">
        <div className="app__container">
          <div className="app__header">
            <div className="logo">
              <img className="logo__thumb" src={ logo }></img>
              <div className="logo__name">mamon</div>
            </div>
            <nav className="nav">
              <ul className="nav__list">
                {/* <div className="nav__item">
                  <a href="#" className="nav__link">Services</a>
                </div>
                <div className="nav__item">
                  <a href="#" className="nav__link">Clients</a>
                </div>
                <div className="nav__item">
                  <a href="#" className="nav__link">Our Team</a>
                </div> */}
                <div className="nav__item">
                  <a href="mailto:contact@mamon.pro" className="nav__button">Contact Us</a>
                </div>
              </ul>
            </nav>
          </div>
          <p className="app__desc app__desc_main">We're an independent development agency.</p>
          <p className="app__desc">We understand the intricacies of web development inside-out. That's why we build rock-solid Mobile and Web applications enriched with user-centered visual experiences.</p>
          <div className="app__team">
            <div className="app-team">
              { members.map((member, index) =>
                <div className="app-team__item" key={ index }>
                  <Member member={ member } />
                </div> ) }
            </div>
          </div>
          <div className="section">
            <div className="section__heading"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default App