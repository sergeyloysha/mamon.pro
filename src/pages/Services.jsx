import React from 'react'
import { App, Container, Section, Footer, Heading1 } from '../styles'
import { Header } from '../components'
import constants from '../constants/'

const { globals } = constants

export default (props) => {
  return (
    <App>

      <Header />

      <App.Content>

        <Section top bottom>
          <Container>
            <Heading1>Services</Heading1>
          </Container>
        </Section>

        <Section top>
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
