import React, { Component } from 'react'
import { Container, Section, App, Logo, Nav, Home, Staff, Footer, Services, Service } from 'styles'
import constants from 'constants/index'

const { icons } = constants

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
                <Logo.Source source={icons.logo} />
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
          <Section>
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
          </Section>

          <Section>
            <Container>
              <Services>
                <Services.List>
                  <Services.Item>
                    <Service>
                      <Service.Icon src={icons.front} alt='' style={{top: '1rem'}} />
                      <Service.Heading>Front-end Development</Service.Heading>
                      <Service.Description>We can turn gorgeous designs into live products with clean code that is on par with todays standards.</Service.Description>
                    </Service>
                  </Services.Item>
                  <Services.Item>
                    <Service>
                      <Service.Icon src={icons.back} alt='' />
                      <Service.Heading>Back-end Development</Service.Heading>
                      <Service.Description>Need a web app, custom backend system or an API? We use rock-solid and scalable technologies like Node and PHP.</Service.Description>
                    </Service>
                  </Services.Item>
                  <Services.Item>
                    <Service>
                      <Service.Icon src={icons.app} alt='' style={{top: '1rem'}} />
                      <Service.Heading>App Development</Service.Heading>
                      <Service.Description>Need a web app, custom backend system or an API? We use rock-solid and scalable technologies like Node and PHP.</Service.Description>
                    </Service>
                  </Services.Item>
                  <Services.Item>
                    <Service>
                      <Service.Icon src={icons.design} alt='' />
                      <Service.Heading>Web App Interfaces</Service.Heading>
                      <Service.Description>Thorough research forms the steady foundation for the road from wire-frames to pixel perfect web apps.</Service.Description>
                    </Service>
                  </Services.Item>
                </Services.List>
              </Services>
            </Container>
          </Section>

          <Section>
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
          </Section>
          <Section>
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
          </Section>
        </App.Content>
      </App>
    )
  }
}
