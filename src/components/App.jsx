import React, { Component } from 'react'
import styled from 'styled-components'
import constants from 'constants/index'
import iconLogo from 'resources/images/logo.svg'

const App = styled.div`
  margin: 0;
`

App.Container = styled.div`
  width: 100%;
  max-width: 107rem;
  padding: 0 1.5rem;
  margin: 0 auto;
`

App.Header = styled.header`
  padding: 5rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled.div`
  display: flex;
  align-items: center;
`

Logo.Source = styled.div`
  display: block;
  width: 4.8rem;
  height: 4.8rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  ${props => props.source && `
    background-image: url(${props.source});
  `}
`

Logo.Title = styled.div`
  font-weight: 600;
  font-size: 2.8rem;
  margin-left: 2rem;
`

App.Nav = styled.nav`

`

App.Content = styled.main`

`

App.Section = styled.section`

`

const Nav = styled.nav`
  margin: 0;
  padding: 0;
`

Nav.List = styled.div`
  display: flex;
  align-items: center;
`

Nav.Item = styled.div`
  margin-left: 4rem;
  font-size: 2.4rem;

  display: flex;
  align-items: center;

  ${props => props.divider && `
    &::before {
      content: '/';
      display: block;
      margin-right: 1rem;
    }
  `}
`

Nav.Link = styled.a`
  display: block;
  color: #000;
  text-decoration: none;
  cursor: pointer;
  transition: color .2s;

  &:hover {
    color: #5528FF;
  }
`

const Home = styled.div`
`

Home.Inner = styled.div`
  width: 60%;
`

Home.Heading = styled.h1`
  margin: 5rem 0 8rem 0;
  font-weight: 700;
  font-size: 5rem;
  line-height: 1.2;
`

Home.Description = styled.div`
`

Home.Description.Paragraph = styled.p`
  margin: 0 0 3rem 0;
  font-size: 2.4rem;
  font-weight: 400;
`

const Staff = styled.div`
  padding: 5rem 0;
`

Staff.List = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -1.5rem;
  margin-right: -1.5rem;
`

Staff.Item = styled.div`
  width: 33.333332%;
  padding: 0 1.5rem;
  margin-bottom: 50px;
`

Staff.Card = styled.div`
  height: 100%;
  padding: 3rem;
  position: relative;
  border-radius: .5rem;
  background: #fff;
  box-shadow: 0px 1rem 4rem rgba(98, 122, 129, 0.13);

  display: flex;
  align-items: center;
`

Staff.Card.Photo = styled.div`
  flex-shrink: 0;
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 100%;
  background: #ececec;
  margin-right: 2rem;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  ${props => props.source && `
    background-image: url(${props.source});
  `}
`

Staff.Card.Info = styled.div``
Staff.Card.Info.Name = styled.div`
  font-weight: 500;
  font-size: 1.8rem;
`
Staff.Card.Info.Position = styled.div`
  font-weight: 400;
  font-size: 1.6rem;
  color: #777;
`

export default class extends Component {
  render () {
    return (
      <App>
        <App.Container>
          <App.Header>
            <Logo
              onClick={(e) => console.log(e)}
            >
              <Logo.Source source={iconLogo} />
              {/* <Logo.Title>Mamon</Logo.Title> */}
            </Logo>
            <App.Nav>
              <Nav.List>
                {/* <Nav.Item>
                  <Nav.Link to='/services'>Services</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link to='/work'>Work</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link to='/about'>About</Nav.Link>
                </Nav.Item> */}

                <Nav.Item divider>
                  <Nav.Link href='mailto:contact@mamon.pro'>contact@mamon.pro</Nav.Link>
                </Nav.Item>
              </Nav.List>
            </App.Nav>
          </App.Header>

          <App.Content>
            <App.Section>
              <Home>
                <Home.Inner>
                  <Home.Heading>We're an independent development agency.</Home.Heading>
                  <Home.Description>
                    <Home.Description.Paragraph>From SaaS and enterprise software to mobile apps and marketing websites, we create digital experiences that people love.</Home.Description.Paragraph>
                    <Home.Description.Paragraph>We work as one team with our clients in an iterative design and development process.</Home.Description.Paragraph>
                  </Home.Description>
                </Home.Inner>
              </Home>
            </App.Section>
            <App.Section>
              <Staff>
                <Staff.List>
                  { constants.staff.map((item, index) =>
                    <Staff.Item key={index}>
                      <Staff.Card>
                        <Staff.Card.Photo source={item.thumb} />
                        <Staff.Card.Info>
                          <Staff.Card.Info.Name>
                            { item.firstName + ' ' + item.lastName }
                          </Staff.Card.Info.Name>
                          <Staff.Card.Info.Position>
                            { item.position }
                          </Staff.Card.Info.Position>
                        </Staff.Card.Info>
                      </Staff.Card>
                    </Staff.Item>)
                  }
                </Staff.List>
              </Staff>
            </App.Section>
          </App.Content>
        </App.Container>
      </App>
    )
  }
}
