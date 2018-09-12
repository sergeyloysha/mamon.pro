import React from 'react'
import { Container, Section, App, Home, Staff, Footer, Services, Service, Clients, Projects, Button } from '../styles'
import { Header } from '../components'
import constants from '../constants/index'

const { clients, staff, icons, globals, projects } = constants

export default (props) => {
  return (
    <App>

      <Header />

      <App.Content>

        <Section top bottom>
          <Container>
            <Home>
              <Home.Inner>
                <Home.Heading>We're an independent development agency.</Home.Heading>
                <Home.Description>
                  <Home.Description.Paragraph>From SaaS and enterprise software to mobile apps and marketing websites, we create digital experiences that people love.</Home.Description.Paragraph>
                  <Home.Description.Paragraph>We work as one team with our clients in an iterative design and development process.</Home.Description.Paragraph>
                </Home.Description>
                <Button large>Get a free estimate!</Button>
              </Home.Inner>
            </Home>
          </Container>
        </Section>

        <Section top bottom>
          <Container>
            <Services>
              <Services.List>
                <Services.Item>
                  <Service>
                    <Service.Icon src={icons.front} alt='' style={{ top: '1rem' }} />
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
                    <Service.Icon src={icons.app} alt='' style={{ top: '1rem' }} />
                    <Service.Heading>App Development</Service.Heading>
                    <Service.Description>All apps we create have a few things in common. They are rock-solid, beautifully designed, and used across the globe.</Service.Description>
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

        <Section top bottom>
          <Clients>
            <Container>
              <Clients.List>
                { clients.map((client, index) =>
                  <Clients.Item key={index}>
                    <Clients.Icon src={client.icon} alt={client.name} />
                  </Clients.Item>
                ) }
              </Clients.List>
            </Container>
          </Clients>
        </Section>

        <Section top>
          <Container>
            <Section.Heading>Latest Projects</Section.Heading>
            <Projects>
              <Projects.List>
                { projects.map((project, index) =>
                  <Projects.Item key={index} href={project.url} target='_blank'>
                    <Projects.Item.Thumb src={project.thumb} />
                    <Projects.Item.Heading>{ project.title }</Projects.Item.Heading>
                    <Projects.Item.Description>{ project.description }</Projects.Item.Description>
                  </Projects.Item>
                ) }
              </Projects.List>
            </Projects>
          </Container>
        </Section>

        <Section top bottom>
          <Container>
            <Section.Heading>Meet our team</Section.Heading>
            <Staff>
              <Staff.List>
                { staff.map((item, index) =>
                  <Staff.Item key={index}>
                    <Staff.Card>
                      <Staff.Card.Photo source={item.thumb} />
                      <Staff.Card.Info>
                        <Staff.Card.Info.Name>
                          { [item.firstName, item.lastName].join(' ') }
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
                      /&nbsp;<Footer.List.Link href={'mailto:' + globals.email}>{globals.email}</Footer.List.Link>
                  </Footer.List.Item>
                </Footer.List>
                <Footer.Contacts>
                  {globals.address}
                </Footer.Contacts>
              </Footer.Inner>
            </Container>
          </Footer>
        </Section>
      </App.Content>
    </App>
  )
}
