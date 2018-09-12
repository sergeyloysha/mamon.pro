import React from 'react'
import { Container, Section, App, Footer, Inputs, Heading1, Button } from '../styles'
import { Header } from '../components'
import constants from '../constants'

const { globals, inputs } = constants

export default (props) => {
  return (
    <App>

      <Header />

      <App.Content>

        <Section top bottom>
          <Container>
            <Heading1>Short Description Here</Heading1>
            <Inputs>
              <Inputs.List>
                { inputs.map((input, index) =>
                  <Inputs.Line>
                    <Inputs.Line.Label>{input.label}</Inputs.Line.Label>
                    {(input.type == 'textarea') ? (<textarea />) : (<input type={input.type} />)}
                  </Inputs.Line>
                )}
                <Inputs.Action>
                  <Button>Submit</Button>    
                </Inputs.Action>
              </Inputs.List>
            </Inputs>
          
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
