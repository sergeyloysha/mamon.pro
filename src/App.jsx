import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

class App extends Component {
  render () {
    return (
      <div className='wrapper'>
        <div className='page'>
          <header className='header'>
            <div className='container'>
              <div className='header__inner'>
                <div className='header__logo'>
                  <div className='logo'>
                    <img className='logo__source' src='/assets/images/logo.svg' alt='Mamon logo' />
                  </div>
                </div>
                <div className='header__nav'>
                  <nav className='nav'>
                    <ul className='nav__list'>
                      {/* <li className='nav__item'>
                      <a href='/' className='nav__link'>Hey</a>
                    </li>
                    <li className='nav__item'>
                      <a href='/' className='nav__link'>cards</a>
                    </li>
                    <li className='nav__item'>
                      <a href='/' className='nav__link'>Staff</a>
                    </li> */}
                      <li className='nav__item nav__item_email'>
                        <a href='mailto:hello@mamon.pro' className='nav__link'>hello@mamon.pro</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </header>

          <section className='section'>
            <div className='container'>
              <div className='hero'>
                <h1 className='hero__heading'>We're an independent design &amp; development team.</h1>
                <div className='hero__description'>
                  <p>From SaaS and enterprise software to marketing websites, we create digital experiences that people love.</p>
                  <p>We work as one team with our clients in an iterative design and development process.</p>
                </div>
              </div>
            </div>
          </section>

          <section className='section section_tiny'>
            <div className='container'>
              <div className='row'>
                <div className='col-xs-6 col-md-3'>
                  <div className='stat'>
                    <div className='stat__count'>16</div>
                    <div className='stat__text'>Projects<br />launched</div>
                  </div>
                </div>
                <div className='col-xs-6 col-md-3'>
                  <div className='stat'>
                    <div className='stat__count'>04</div>
                    <div className='stat__text'>Countries<br />represented</div>
                  </div>
                </div>
                <div className='col-xs-6 col-md-3'>
                  <div className='stat'>
                    <div className='stat__count'>03</div>
                    <div className='stat__text'>Years in<br />business</div>
                  </div>
                </div>
                <div className='col-xs-6 col-md-3'>
                  <div className='stat'>
                    <div className='stat__count'>08</div>
                    <div className='stat__text'>In-house<br />employees</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className='section'>
            <div className='container'>
              <div className='section__head'>
                <div className='scream'>Want to know what we can do for you?<br /><strong>It’s a mix of these things:</strong></div>
              </div>
              <div className='section__content'>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='card'>
                      <h2 className='card__title'>Development</h2>
                      <div className='card__description'>We can turn designs into live products with clean code that is on par with todays standards.</div>
                      <div className='card__list'>
                        <div className='card__item'>React / Redux</div>
                        <div className='card__item'>Vue / Vuex</div>
                        <div className='card__item'>ES5 / ES6+</div>
                        <div className='card__item'>HTML5</div>
                        <div className='card__item'>SCSS</div>
                        <div className='card__item'>Stylus</div>
                        <div className='card__item'>Node</div>
                        <div className='card__item'>PHP</div>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='card'>
                      <h2 className='card__title'>Design</h2>
                      <div className='card__description'>We know every pixel is valuable and know how to make the most pretty and intuitive apps.</div>
                      <div className='card__list'>
                        <div className='card__item'>User Intrface (UI)</div>
                        <div className='card__item'>User Experience (UX)</div>
                        <div className='card__item'>Product Design</div>
                        <div className='card__item'>Visual Design</div>
                        <div className='card__item'>Illustrations</div>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='card'>
                      <h2 className='card__title'>Marketing</h2>
                      <div className='card__description'>We help marketing teams build anything they can dream of</div>
                      <div className='card__list'>
                        <div className='card__item'>HTML emails</div>
                        <div className='card__item'>Landing pages</div>
                        <div className='card__item'>Marketo integration</div>
                        <div className='card__item'>HubSpot integration</div>
                        <div className='card__item'>Eloqua integration</div>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='card'>
                      <h2 className='card__title'>Quality Assurance</h2>
                      <div className='card__description'>Our QA team ensures high standard of quality of products delivered.</div>
                      <div className='card__list'>
                        <div className='card__item'>Usability testing</div>
                        <div className='card__item'>Performance testing</div>
                        <div className='card__item'>Manual testing</div>
                        <div className='card__item'>Automated testing</div>
                        <div className='card__item'>Unit testing</div>
                        <div className='card__item'>Regression testing</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className='section section_gray'>
            <div className='container'>
              <div className='section__head'>
                <div className='scream'>In addition to strong expertise, we offer:</div>
              </div>
              <div className='section__content'>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='card card_clear'>
                      <h2 className='card__title color-indigo'>High-level<br />communication</h2>
                      <div className='card__description'>So many good teams fail because of poor planning and lack of communications. We keep you aligned with our team - every day, week and month. So you know what’s going on at every of your project.</div>
                      <div className='card__images'>
                        <div className='card__image' style={{ width: '8rem' }}><img src='/assets/images/icon-trello-black.svg' alt='' /></div>
                        <div className='card__image' style={{ width: '10rem' }}><img src='/assets/images/icon-slack-black.svg' alt='' /></div>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='messages'>
                      <div className='messages__list'>
                        <div className='messages__item'>
                          <div className='messages__message'>Hello Sergey, how things are going?</div>
                        </div>
                        <div className='messages__item'>
                          <div className='messages__message messages__message_my'>Hey, everything is going well. We’re already delivered the design.</div>
                        </div>
                        <div className='messages__item'>
                          <div className='messages__message'>Coooool, let me check.</div>
                        </div>
                        <div className='messages__item'>
                          <div className='messages__message messages__message_my'>Sure.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className='section section_bottom-clear'>
            <div className='section__content'>

              <div className='collage'>
                <div className='collage__item' style={{ width: '189px', left: '-0.0694444%', top: '175px' }}>
                  <img src='https://d2998a9lzvovjv.cloudfront.net/collage-1@1x.c7b776f8.png' alt='' />
                </div>
                <div className='collage__item' style={{ width: '199px', left: '6.11111%', top: '534px', zIndex: 9 }}>
                  <img src='https://d2998a9lzvovjv.cloudfront.net/collage-2@1x.3c561a1a.png' alt='' />
                </div>
                <div className='collage__item collage__item_new' style={{ width: '576px', left: '37.2917%', top: '325px', zIndex: 11 }}>
                  <img src='/assets/images/projects/1.png' alt='' />
                </div>
                <div className='collage__item' style={{ width: '200px', left: '15%', top: '220px', zIndex: 10 }}>
                  <img src='https://d2998a9lzvovjv.cloudfront.net/collage-5@1x.690c7042.png' alt='' />
                </div>
                <div className='collage__item collage__item_new' style={{ width: '511px', left: '20.8333%', top: '15px', zIndex: 8 }}>
                  <img src='/assets/images/projects/3.png' alt='' />
                </div>
                <div className='collage__item' style={{ width: '400px', left: '15.4167%', top: '454px' }}>
                  <img src='/assets/images/projects/6.png' alt='' />
                </div>
                <div className='collage__item' style={{ width: '83px', left: '90.9028%', top: '119px', zIndex: 11 }}>
                  <img src='https://d2998a9lzvovjv.cloudfront.net/collage-8@1x.13f5e54b.png' alt='' />
                </div>
                <div className='collage__item' style={{ width: '450px', left: '70%', top: '260px' }}>
                  <img src='/assets/images/projects/2.png' alt='' />
                </div>
                <div className='collage__item' style={{ width: '532px', left: '72.4306%', top: '462px' }}>
                  <img src='https://d2998a9lzvovjv.cloudfront.net/collage-10@1x.f47f643e.png' alt='' />
                </div>
                <div className='collage__item' style={{ width: '46px', left: '15.5556%', top: '68px', zIndex: 12 }}>
                  <img src='https://d2998a9lzvovjv.cloudfront.net/collage-11@1x.f37e4bc7.png' alt='' />
                </div>
                <div className='collage__item' style={{ width: '202px', left: '31.1111%', top: '378px', zIndex: 9 }}>
                  <img src='https://d2998a9lzvovjv.cloudfront.net/collage-12@1x.ef192dcb.png' alt='' />
                </div>
                <div className='collage__item' style={{ width: '124px', left: '49.2361%', top: '68px', zIndex: 9 }}>
                  <img src='https://d2998a9lzvovjv.cloudfront.net/collage-13@1x.db41a61f.png' alt='' />
                </div>
                <div className='collage__item' style={{ width: '68px', left: '58.0556%', top: '23px' }}>
                  <img src='https://d2998a9lzvovjv.cloudfront.net/collage-14@1x.89ac75ec.png' alt='' />
                </div>
                <div className='collage__item' style={{ width: '48px', left: '59.7222%', top: '108px' }}>
                  <img src='https://d2998a9lzvovjv.cloudfront.net/collage-15@1x.bdbfe07b.png' alt='' />
                </div>
                <div className='collage__item' style={{ width: '391px', left: '64.2361%', top: '31px' }}>
                  <img src='https://d2998a9lzvovjv.cloudfront.net/collage-16@1x.9c0e3cac.png' alt='' />
                </div>
                <div className='collage__item' style={{ width: '76px', left: '65.0694%', top: '-2px', zIndex: 10 }}>
                  <img src='https://d2998a9lzvovjv.cloudfront.net/collage-17@1x.9d568820.png' alt='' />
                </div>
                <div className='collage__item' style={{ width: '250px', left: '44.375%', top: '659px' }}>
                  <img src='https://d2998a9lzvovjv.cloudfront.net/collage-18@1x.be742367.png' alt='' />
                </div>
              </div>

            </div>
          </section>

          <section className='section section_gray'>
            <div className='container'>
              <div className='section__content'>
                <div className='row'>
                  <div className='col-md-8 col-md-offset-2'>
                    <div className='testimonial'>
                      <div className='testimonial__text'>Mamon is one of the best front-end teams we have worked with. Their work has the power to change your business.</div>
                      <div className='testimonial__author'>
                        <div className='testimonial__author-photo'>
                          <img src='/assets/images/testimonials/angela-w.jpeg' alt='Angela Wiesenmüller' />
                        </div>
                        <div className='testimonial__author-info'>
                          <div className='testimonial__author-name'>Angela Wiesenmüller</div>
                          <div className='testimonial__author-position'>Director EMEA at Meltwater</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className='section'>
            <div className='container'>
              <div className='section__content'>
                <div className='row'>
                  <div className='col-md-8 col-md-offset-2'>
                    <div className='card card_center card_clear'>
                      <h2 className='card__title'>Have a project for us?</h2>
                      <div className='card__text'>We would love for you to tell us more about your product; what it’s about and what you believe needs improvement.</div>
                      <div className='card__button'>
                        <a className='button' href='mailto:hello@mamon.pro'>Let's chat</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <footer className='footer'>
          <div className='container'>
            <div className='footer__inner'>
              <h1 className='footer__title'>Want to work with us?</h1>
              <div className='footer__link'>/<a href='mailto:hello@mamon.pro'>hello@mamon.pro</a></div>
              <div className='footer__bottom'>
                <div className='footer__address'>st. September 17th, Grodno, Belarus</div>
                <div className='footer__social'>
                  <div className='social'>
                    <a className='social__item' href='//www.facebook.com/mamonprohq/'>
                      <div className='social__icon'>
                        <FontAwesomeIcon icon={faFacebook} />
                      </div>
                    </a>
                    <a className='social__item' href='//www.linkedin.com/company/mamon/'>
                      <div className='social__icon'>
                        <FontAwesomeIcon icon={faLinkedin} />
                      </div>
                    </a>
                    <a className='social__item' href='//twitter.com/mamon_pro'>
                      <div className='social__icon'>
                        <FontAwesomeIcon icon={faTwitter} />
                      </div>
                    </a>
                    <a className='social__item' href='//instagram.com/mamon.pro'>
                      <div className='social__icon'>
                        <FontAwesomeIcon icon={faInstagram} />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default App
