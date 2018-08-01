import React, { Component } from 'react'
import { Container, App, Logo, Nav, Home, Staff, Footer } from 'styles'
import constants from 'constants/index'
import iconLogo from 'resources/images/logo.svg'

export default class extends Component {
  render () {
    return (
      <App>
        <App.Header>
          <Container>
            <App.Header.Inner>
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
            </App.Header.Inner>
          </Container>
        </App.Header>

        <App.Content>
          <App.Section>
            <Container>
              <Home>
                <Home.Inner>
                  <Home.Heading>We're an independent development agency.</Home.Heading>
                  <Home.Description>
                    <Home.Description.Paragraph>From SaaS and enterprise software to mobile apps and marketing websites, we create digital experiences that people love.</Home.Description.Paragraph>
                    <Home.Description.Paragraph>We work as one team with our clients in an iterative design and development process.</Home.Description.Paragraph>
                  </Home.Description>
                </Home.Inner>
              </Home>
            </Container>
          </App.Section>
          <App.Section>
            <Container>
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
            </Container>
          </App.Section>
          <App.Section>
            <Footer>
              <Container>
                <Footer.Inner>
                  <Footer.Heading>Want to work with us?</Footer.Heading>
                  <Footer.List>
                    <Footer.List.Item>
                      /&nbsp;<Footer.List.Link href='mailto:contact@mamon.pro'>contact@mamon.pro</Footer.List.Link>
                    </Footer.List.Item>
                  </Footer.List>
                  <Footer.Contacts>
                    1 May Street #21, Grodno, 230006
                  </Footer.Contacts>
                </Footer.Inner>
              </Container>
            </Footer>
          </App.Section>
        </App.Content>
      </App>
    )
  }
}
