import React from 'react'
import { withRouter } from 'react-router-dom'
import { Container, App, Logo, Nav } from '../styles'
import constants from '../constants/'

const { icons, globals } = constants

const Header = (props) => {
  const { history } = props

  return (
    <App.Header>
      <Container>
        <App.Header.Inner>
          <Logo
            onClick={(e) => {
              history.push('/')
            }}
          >
            <Logo.Source source={icons.logo} />
          </Logo>
          <App.Nav>
            <Nav.List>
              <Nav.Item divider>
                <Nav.Link href={'mailto:' + globals.email}>{globals.email}</Nav.Link>
              </Nav.Item>
            </Nav.List>
          </App.Nav>
        </App.Header.Inner>
      </Container>
    </App.Header>
  )
}

export default withRouter(Header)
