import React from 'react'
import { Header, Nav, Container } from '../styles'
import { Logo } from '../components'
import { globals } from '../constants/'

export default (props) => {
  return (
    <Header>
      <Container>
        <Header.Inner>
          <Logo />
          <Nav>
            <Nav.List>
              <Nav.Item divider>
                <Nav.Link href={'mailto:' + globals.email}>{globals.email}</Nav.Link>
              </Nav.Item>
            </Nav.List>
          </Nav>
        </Header.Inner>
      </Container>
    </Header>
  )
}
