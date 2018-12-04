import React, { Component, Fragment } from 'react'
import { Container, Section, Content, Outer, Button, Home, Staff, Footer, Service, Row, Col, Heading1, Heading2, Paragraph, Chat, Messangers, Social, CTA, Client } from '../styles'
import { Header, Modal } from '../components'
import { EstimateForm } from '../parts'
import { icons, staff, globals, colors, clients } from '../constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default class extends Component {
  state = {
    estimateModal: false,
    outer: null
  }

  refOuter = null

  handleModal = (state) => {
    this.setState({
      estimateModal: state
    })
  }

  getOuterRef = (n) => {
    this.refOuter = n
  }

  componentDidMount () {
    const heightOuter = this.refOuter.getBoundingClientRect().height

    this.setState({
      outer: heightOuter
    })
  }

  render () {
    const { estimateModal, outer } = this.state

    return (
      <Fragment>
        <Content style={{ marginBottom: outer + 'px' }}>

          <Header />

          <Section full>
            <Container>
              <Home>
                <Heading1>We're an independent design &amp; development team.</Heading1>
                <Row>
                  <Col sm={10}>
                    <Paragraph>From SaaS and enterprise software to marketing websites, we create digital experiences that people love.</Paragraph>
                    <Paragraph>We work as one team with our clients in an iterative design and development process.</Paragraph>
                  </Col>
                </Row>
              </Home>
            </Container>
          </Section>

          <Section full>
            <Container>
              <Row>
                { clients.map((client, index) =>
                  <Col sm={6} md={3} key={index}>
                    <Client>
                      <Client.Icon src={client.icon} alt={client.name} />
                    </Client>
                  </Col>
                ) }
              </Row>
            </Container>
          </Section>

          <Section full>
            <Container>
              <Section.Heading>Our Expertise</Section.Heading>
              <Section.Content>
                <Row>
                  <Col sm={4}>
                    <Service>
                      <Service.Icon>
                        <img src={icons.development} alt='Web Development' />
                      </Service.Icon>
                      <Service.Heading>Development</Service.Heading>
                      <Service.List>
                        <Service.Item>React / Redux</Service.Item>
                        <Service.Item>Vue / Vuex</Service.Item>
                        <Service.Item>ES5 / ES6+</Service.Item>
                        <Service.Item>HTML5</Service.Item>
                        <Service.Item>SCSS / Stylus</Service.Item>
                      </Service.List>
                    </Service>
                  </Col>
                  <Col sm={4}>
                    <Service>
                      <Service.Icon>
                        <img src={icons.design} alt='Design' />
                      </Service.Icon>
                      <Service.Heading>Design</Service.Heading>
                      <Service.List>
                        <Service.Item>User Experience (UX)</Service.Item>
                        <Service.Item>Interface Design (UI)</Service.Item>
                        <Service.Item>Product Design</Service.Item>
                        <Service.Item>Visual Design</Service.Item>
                        <Service.Item>Illustrations</Service.Item>
                      </Service.List>
                    </Service>
                  </Col>
                  <Col sm={4}>
                    <Service>
                      <Service.Icon>
                        <img src={icons.marketing} alt='Marketing' />
                      </Service.Icon>
                      <Service.Heading>Marketing</Service.Heading>
                      <Service.List>
                        <Service.Item>HTML emails</Service.Item>
                        <Service.Item>Landing pages</Service.Item>
                        <Service.Item>Marketo integration</Service.Item>
                        <Service.Item>HubSpot integration</Service.Item>
                        <Service.Item>Eloqua integration</Service.Item>
                      </Service.List>
                    </Service>
                  </Col>
                </Row>
              </Section.Content>
            </Container>
          </Section>

          <Section full background={colors.light}>
            <Container>
              <Row>
                <Col md={6}>
                  <Heading2>High level communication</Heading2>
                  <Paragraph lineHeight={1.8}>So many good teams fail because of poor planning and lack of communications. We keep you aligned with our team - every day, week and month. So you know what’s going on at every of your project.</Paragraph>
                  <Messangers>
                    <Messangers.Item width={'8rem'}>
                      <Messangers.Icon src={icons.trello} />
                    </Messangers.Item>
                    <Messangers.Item width={'10rem'}>
                      <Messangers.Icon src={icons.slack} />
                    </Messangers.Item>
                  </Messangers>
                </Col>
                <Col mdOffset={0.5} md={5.5}>
                  <Chat>
                    <Chat.Message type='in'>Hello Vadim, how things are going?</Chat.Message>
                    <Chat.Message type='out'>Hey, everything is going well. We’re already delivered the design.</Chat.Message>
                    <Chat.Message type='in'>Coooool, let me check.</Chat.Message>
                    <Chat.Message type='out'>Sure.</Chat.Message>
                  </Chat>
                </Col>
              </Row>
            </Container>
          </Section>

          <Section full color={colors.white}>
            <CTA>
              <Container>
                <Row>
                  <Col sm={6}>
                    <Heading2>Let's work together</Heading2>
                    <Paragraph>We'd love to hear about your product.<br />Let's talk and turn your great idea<br />into something even greater!</Paragraph>
                    <Button white onClick={() => this.handleModal(true)}>Get a free estimate</Button>
                  </Col>
                  <Col sm={6}>
                    <CTA.Image />
                  </Col>
                </Row>
              </Container>
            </CTA>
          </Section>

          <Section full>
            <Container>
              <Section.Heading>Meet our team</Section.Heading>
              <Row>
                { staff.map((item, index) =>
                  <Col sm={6} md={3} key={index}>
                    <Staff.Card>
                      <Staff.Card.Photo source={item.thumb} />
                      <Staff.Card.Info>
                        <Staff.Card.Info.Name>
                          {item.firstName}<br />{item.lastName}
                        </Staff.Card.Info.Name>
                        <Staff.Card.Info.Position>
                          { item.position }
                        </Staff.Card.Info.Position>
                      </Staff.Card.Info>
                    </Staff.Card>
                  </Col>)
                }
              </Row>
            </Container>
          </Section>

        </Content>

        <Outer innerRef={this.getOuterRef}>
          <Section background={colors.indigo}>
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
                    <Row>
                      <Col sm={6}>{globals.address}</Col>
                      <Col sm={6} align='right'>
                        <Social>
                          <Social.Item href='//www.facebook.com/mamonprohq/'>
                            <Social.Icon>
                              <FontAwesomeIcon icon={faFacebook} />
                            </Social.Icon>
                          </Social.Item>
                          <Social.Item href='//www.linkedin.com/company/mamon/'>
                            <Social.Icon>
                              <FontAwesomeIcon icon={faLinkedin} />
                            </Social.Icon>
                          </Social.Item>
                          <Social.Item href='//twitter.com/mamon_pro'>
                            <Social.Icon>
                              <FontAwesomeIcon icon={faTwitter} />
                            </Social.Icon>
                          </Social.Item>
                          <Social.Item href='//instagram.com/mamon.pro'>
                            <Social.Icon>
                              <FontAwesomeIcon icon={faInstagram} />
                            </Social.Icon>
                          </Social.Item>
                        </Social>
                      </Col>
                    </Row>
                  </Footer.Contacts>
                </Footer.Inner>
              </Container>
            </Footer>
          </Section>
        </Outer>

        <Modal
          show={estimateModal}
          onClose={() => this.handleModal(false)}
        >
          <EstimateForm />
        </Modal>

      </Fragment>
    )
  }
}
