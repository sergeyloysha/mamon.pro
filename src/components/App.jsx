import React, { Component } from 'react'
import styled from 'styled-components'

import logo from 'resources/images/mamon-logo.svg'
import thumb1 from 'resources/images/thumbs/vadim_karacharski.jpeg'
import thumb2 from 'resources/images/thumbs/sergey_loysha.jpg'
import thumb3 from 'resources/images/thumbs/andrey_pitunov.jpg'
import thumb4 from 'resources/images/thumbs/evgeny_yakimovich.jpeg'
import thumb5 from 'resources/images/thumbs/tomash_svorobovich.jpg'
import thumb6 from 'resources/images/thumbs/dmitry_shindin.jpg'
import thumb8 from 'resources/images/thumbs/alex_tukaylo.jpg'
import thumb9 from 'resources/images/thumbs/artyom_khomyakov.jpeg'
import thumb10 from 'resources/images/thumbs/agneshka_maksimik.jpg'
import clients from 'resources/images/clients.png'

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
    id: 10,
    firstName: 'Agneshka',
    lastName: 'Maksimik',
    position: 'Mobile Developer',
    thumb: thumb10
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

const App__Wrapper = styled.div `
  max-width: 90rem;
  height: 100vh;
  margin: 0 auto;
`;

const App__Navbar = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 7rem;
  padding: 0 4rem;

  @media screen and (max-width: 520px) {
    display: none;
  }
`;

const App__Logo = styled.div `
  display: flex;

  ${ props => props._name
    ? `
      position: relative;
      top: 2.5rem;
      font-weight: 700;
      font-size: 3.2rem;
      line-height: 1;
    `
    : null
  }
`;

const App__Thumb = styled.img `
  display: block;
  width: 100%;
  max-width: 4.8rem;
  height: auto;
  margin-right: 2rem;
`

const App__Contact = styled.div `
  display: flex;
  font-size: 2.2rem;
`;

const App__Btn = styled.a `
  font-size: 2.2rem;
  margin-left: 1rem;
  color: #000;
  transition: color .2s ease-out;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #5528ff;
    transition: color .2s ease-out;
  }
`;

const App__Container = styled.div `
  display: flex;
  flex-direction: column;
  margin: 4rem;
`;

const App__Title = styled.div `
  font-size: 4rem;
  font-weight: 600;
  line-height: 5rem;
  margin-bottom: 6rem;

  @media screen and (max-width: 770px) {
    font-size: 3rem;
    line-height: 4rem;
    margin-bottom: 4rem;
  }
`;

const App__Desc = styled.div `
  font-size: 3rem;
  font-weight: 300;
  line-height: 5rem;
  margin: 2rem 0;

  @media screen and (max-width: 770px) {
    font-size: 2rem;
    line-height: 4rem;
    margin: 1rem 0;
  }
`;

const App__Clients = styled.div `
  width: 100%;
  height: 5rem;
  background: url(${clients}) no-repeat;
  background-size: contain;
  margin-top: 4rem;
`;

class App extends Component {
  render() {
    return (
      <App__Wrapper>
        <App__Navbar>
          <App__Logo>
            <App__Thumb src={logo} alt=""/>
            <App__Logo _name>mamon</App__Logo>
          </App__Logo>
          <App__Contact>
            <div>/</div> <App__Btn href="mailto:contact@mamon.pro">contact@mamon.pro</App__Btn>
          </App__Contact>
        </App__Navbar>
        <App__Container>
          <App__Title>We're an independent development agency.</App__Title>
          <App__Desc>We understand the intricacies of web development inside-out. That's why we build rock-solid Mobile and Web applications enriched with user-centered visual experiences.</App__Desc>
          <App__Desc>We work as one team with our clients in an iterative design and development process.</App__Desc>
          <App__Clients src={clients}/>
        </App__Container>
      </App__Wrapper>
    )
  }
}

export default App