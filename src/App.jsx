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

                      <svg width="138" height="18" viewBox="0 0 138 18" fill="none" aria-labelledby="title" aria-hidden="false" xmlns="http://www.w3.org/2000/svg">
                        <title id="title">Mamon</title>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.8406 0C16.4597 0 14.6998 0.889734 13.5611 2.70342C12.4914 0.889734 10.8696 0 8.66117 0C6.48725 0 4.83093 0.821292 3.72672 2.4981V0.444867H0V17.5551H3.72672V7.97338C3.72672 4.9962 5.31402 3.45627 7.55696 3.45627C9.62736 3.45627 10.8006 4.8251 10.8006 7.18631V17.5551H14.5273V7.97338C14.5273 4.96198 15.9766 3.45627 18.2885 3.45627C20.3589 3.45627 21.6357 4.8251 21.6357 7.18631V17.5551H25.3624V6.94677C25.3624 2.70342 22.7399 0 18.8406 0ZM42.3254 2.87452C40.9106 0.958174 38.9092 0 36.2867 0C33.9058 0 31.9044 0.855513 30.2135 2.60076C28.5227 4.34601 27.6946 6.46768 27.6946 9C27.6946 11.4981 28.5227 13.654 30.2135 15.3992C31.9044 17.1445 33.9058 18 36.2867 18C38.9092 18 40.9106 17.0418 42.3254 15.0913V17.5551H46.0521V0.444867H42.3254V2.87452ZM32.9741 12.9354C31.9389 11.8745 31.4213 10.5741 31.4213 9C31.4213 7.42586 31.9389 6.12547 32.9741 5.09886C34.0093 4.03802 35.3205 3.52471 36.8733 3.52471C38.4261 3.52471 39.7374 4.03802 40.7726 5.09886C41.8078 6.12547 42.3254 7.42586 42.3254 9C42.3254 10.5741 41.8078 11.8745 40.7726 12.9354C39.7374 13.962 38.4261 14.4753 36.8733 14.4753C35.3205 14.4753 34.0093 13.962 32.9741 12.9354ZM63.2669 2.70342C64.4056 0.889734 66.1654 0 68.5464 0C72.4456 0 75.0682 2.70342 75.0682 6.94677V17.5551H71.3414V7.18631C71.3414 4.8251 70.0647 3.45627 67.9943 3.45627C65.6823 3.45627 64.2331 4.96198 64.2331 7.97338V17.5551H60.5063V7.18631C60.5063 4.8251 59.3331 3.45627 57.2627 3.45627C55.0198 3.45627 53.4325 4.9962 53.4325 7.97338V17.5551H49.7058V0.444867H53.4325V2.4981C54.5367 0.821292 56.193 0 58.3669 0C60.5754 0 62.1972 0.889734 63.2669 2.70342ZM86.5101 18C89.0636 18 91.203 17.1445 92.9628 15.3992C94.7227 13.654 95.6198 11.5323 95.6198 9C95.6198 6.46768 94.7227 4.34601 92.9628 2.60076C91.203 0.855513 89.0636 0 86.5101 0C83.9911 0 81.8172 0.855513 80.0573 2.60076C78.2975 4.34601 77.4003 6.46768 77.4003 9C77.4003 11.5323 78.2975 13.654 80.0573 15.3992C81.8172 17.1445 83.9911 18 86.5101 18ZM82.6798 12.8669C81.6446 11.8403 81.127 10.5399 81.127 9C81.127 7.46008 81.6446 6.1597 82.6798 5.13308C83.715 4.10646 84.9918 3.59316 86.5101 3.59316C88.0284 3.59316 89.3051 4.10646 90.3403 5.13308C91.3755 6.1597 91.8931 7.46008 91.8931 9C91.8931 10.5399 91.3755 11.8403 90.3403 12.8669C89.3051 13.8935 88.0284 14.4068 86.5101 14.4068C84.9918 14.4068 83.715 13.8935 82.6798 12.8669ZM102.026 2.63498C103.165 0.889734 104.925 0 107.375 0C111.343 0 114 2.6692 114 7.04943V17.5551H110.273V7.42586C110.273 4.85931 108.79 3.45627 106.409 3.45627C103.786 3.45627 102.026 5.06464 102.026 8.38403V17.5551H98.2995V0.444867H102.026V2.63498ZM135.75 0.84375H122.25C121.473 0.84375 120.843 1.47335 120.843 2.25V9C120.843 9.77665 121.473 10.4062 122.25 10.4062H135.75C136.526 10.4062 137.156 9.77665 137.156 9V2.25C137.156 1.47335 136.526 0.84375 135.75 0.84375ZM122.25 0C121.007 0 120 1.00736 120 2.25V9C120 10.2426 121.007 11.25 122.25 11.25H135.75C136.992 11.25 138 10.2426 138 9V2.25C138 1.00736 136.992 0 135.75 0H122.25ZM134.905 7.53525C135.384 7.056 135.621 6.4755 135.621 5.79375C135.621 5.112 135.384 4.5315 134.905 4.059C134.433 3.57975 133.852 3.3435 133.17 3.3435C132.489 3.3435 131.908 3.57975 131.429 4.059C130.956 4.5315 130.72 5.112 130.72 5.79375C130.72 6.4755 130.956 7.056 131.429 7.53525C131.908 8.00775 132.489 8.244 133.17 8.244C133.852 8.244 134.433 8.00775 134.905 7.53525ZM131.976 7.00875C131.658 6.68475 131.496 6.27975 131.496 5.79375C131.496 5.30775 131.658 4.90275 131.976 4.5855C132.3 4.2615 132.698 4.0995 133.17 4.0995C133.643 4.0995 134.041 4.2615 134.358 4.5855C134.682 4.90275 134.844 5.30775 134.844 5.79375C134.844 6.27975 134.682 6.68475 134.358 7.00875C134.041 7.326 133.643 7.488 133.17 7.488C132.698 7.488 132.3 7.326 131.976 7.00875ZM123.003 8.15625V3.43125H124.745C125.19 3.43125 125.562 3.57975 125.859 3.87675C126.162 4.17375 126.311 4.545 126.311 4.98375C126.311 5.4225 126.162 5.787 125.859 6.09075C125.562 6.38775 125.19 6.53625 124.745 6.53625H123.78V8.15625H123.003ZM123.78 4.16025V5.80725H124.745C125.204 5.80725 125.535 5.463 125.535 4.98375C125.535 4.5045 125.204 4.16025 124.745 4.16025H123.78ZM129.388 6.32025L130.461 8.15625H129.611L128.612 6.435H127.694V8.15625H126.917V3.43125H128.807C129.233 3.43125 129.59 3.57975 129.881 3.87675C130.178 4.167 130.326 4.52475 130.326 4.95C130.326 5.55075 129.948 6.0975 129.388 6.32025ZM129.55 4.95C129.55 4.51125 129.219 4.16025 128.807 4.16025H127.694V5.73975H128.807C129.219 5.73975 129.55 5.38875 129.55 4.95Z" fill="black"/>
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
