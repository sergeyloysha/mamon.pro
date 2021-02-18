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
                    <a href="/" title="Mamon">
                      <svg width="120" height="32" viewBox="0 0 120 32" fill="none" aria-labelledby="title" aria-hidden="false" xmlns="http://www.w3.org/2000/svg">
                        <title id="title">Mamon</title>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M24 4H8C5.85205 4 4.09961 5.69287 4.00415 7.81714C4.17212 14.298 9.47852 19.5 16 19.5C22.5215 19.5 27.8279 14.298 27.9958 7.81714C27.9004 5.69287 26.1479 4 24 4ZM4 24V18.0833C6.51624 20.9342 10.0326 22.8815 14 23.3762V28H8C5.79077 28 4 26.2092 4 24ZM18 28H24C26.2092 28 28 26.2092 28 24V18.0833C25.4838 20.9342 21.9674 22.8815 18 23.3762V28ZM8 0C3.58179 0 0 3.58179 0 8V24C0 28.4182 3.58179 32 8 32H24C28.4182 32 32 28.4182 32 24V8C32 3.58179 28.4182 0 24 0H8ZM16 13.5C14.8955 13.5 14 14.3955 14 15.5C14 16.6045 14.8955 17.5 16 17.5C17.1045 17.5 18 16.6045 18 15.5C18 14.3955 17.1045 13.5 16 13.5ZM49.3146 11.6364C50.0753 10.5454 51.2281 10 52.7499 10C55.4012 10 57.1074 11.8409 57.1074 14.6818V21.6818H54.1332V14.8864C54.1332 13.5227 53.4185 12.7273 52.1965 12.7273C50.8362 12.7273 50.0522 13.6364 50.0522 15.2954V21.6818H47.0781V14.8864C47.0781 13.5227 46.3634 12.7273 45.1415 12.7273C43.8273 12.7273 42.9742 13.6364 42.9742 15.2954V21.6818H40V10.3182H42.9742V11.5227C43.6659 10.5 44.7264 10 46.179 10C47.5853 10 48.6459 10.5454 49.3146 11.6364ZM65.0977 10C66.7115 10 67.9565 10.5454 68.8557 11.6591V10.3182H71.8298V21.6818H68.8557V20.3409C67.9565 21.4546 66.7115 22 65.0977 22C63.5529 22 62.2386 21.4318 61.1321 20.2727C60.0485 19.1136 59.4951 17.6818 59.4951 16C59.4951 14.3182 60.0485 12.9091 61.1321 11.75C62.2386 10.5909 63.5529 10 65.0977 10ZM62.4692 16C62.4692 16.9318 62.769 17.7046 63.3684 18.3182C63.9679 18.9091 64.7288 19.2046 65.651 19.2046C66.5732 19.2046 67.334 18.9091 67.9335 18.3182C68.556 17.7046 68.8557 16.9318 68.8557 16C68.8557 15.0682 68.556 14.2954 67.9335 13.7046C67.334 13.0909 66.5732 12.7954 65.651 12.7954C64.7288 12.7954 63.9679 13.0909 63.3684 13.7046C62.769 14.2954 62.4692 15.0682 62.4692 16ZM87.7378 10C86.2162 10 85.0634 10.5454 84.3025 11.6364C83.6339 10.5454 82.5734 10 81.1669 10C79.7144 10 78.6538 10.5 77.9622 11.5227V10.3182H74.988V21.6818H77.9622V15.2954C77.9622 13.6364 78.8152 12.7273 80.1294 12.7273C81.3513 12.7273 82.0662 13.5227 82.0662 14.8864V21.6818H85.0403V15.2954C85.0403 13.6364 85.8242 12.7273 87.1844 12.7273C88.4065 12.7273 89.1212 13.5227 89.1212 14.8864V21.6818H92.0953V14.6818C92.0953 11.8409 90.3892 10 87.7378 10ZM106.679 16C106.679 17.6818 106.08 19.1136 104.904 20.2727C103.729 21.4318 102.276 22 100.57 22C98.8636 22 97.4111 21.4318 96.2354 20.2727C95.0594 19.1136 94.483 17.6818 94.483 16C94.483 14.3182 95.0594 12.9091 96.2354 11.75C97.4111 10.5909 98.8636 10 100.57 10C102.276 10 103.729 10.5909 104.904 11.75C106.08 12.9091 106.679 14.3182 106.679 16ZM97.4573 16C97.4573 16.9091 97.757 17.6591 98.3334 18.25C98.9329 18.8409 99.6707 19.1364 100.57 19.1364C101.469 19.1364 102.207 18.8409 102.806 18.25C103.406 17.6591 103.705 16.9091 103.705 16C103.705 15.0909 103.406 14.3409 102.806 13.75C102.207 13.1591 101.469 12.8636 100.57 12.8636C99.6707 12.8636 98.9329 13.1591 98.3334 13.75C97.757 14.3409 97.4573 15.0909 97.4573 16ZM115.643 10C114.075 10 112.922 10.5227 112.207 11.5909V10.3182H109.233V21.6818H112.207V15.5454C112.207 13.6591 113.198 12.7273 114.743 12.7273C116.127 12.7273 117.026 13.5454 117.026 15.0682V21.6818H120V14.7046C120 13.2273 119.585 12.0909 118.755 11.25C117.948 10.4091 116.911 10 115.643 10Z" fill="currentColor"/>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className='header__nav'>
                  <nav className='nav'>
                    <ul className='nav__list'>
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
                <div className='hero__heading'>
                  <h1>We're an independent development team.</h1>
                </div>
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
                    <div className='stat__count'>32</div>
                    <div className='stat__text'>Projects<br />launched</div>
                  </div>
                </div>
                <div className='col-xs-6 col-md-3'>
                  <div className='stat'>
                    <div className='stat__count'>07</div>
                    <div className='stat__text'>Countries<br />represented</div>
                  </div>
                </div>
                <div className='col-xs-6 col-md-3'>
                  <div className='stat'>
                    <div className='stat__count'>04</div>
                    <div className='stat__text'>Years in<br />business</div>
                  </div>
                </div>
                <div className='col-xs-6 col-md-3'>
                  <div className='stat'>
                    <div className='stat__count'>05</div>
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
                        <div className='card__item'>React</div>
                        <div className='card__item'>Vue</div>
                        <div className='card__item'>NextJS</div>
                        <div className='card__item'>Wordpress</div>
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

          <section className='section section_gray' style={{ borderTop: '1px solid #e1eaf0' }}>
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
