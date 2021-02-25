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

                      <svg width="111" height="24" viewBox="0 0 111 24" fill="none" aria-labelledby="title" aria-hidden="false" xmlns="http://www.w3.org/2000/svg">
                        <title id="title">Mamon</title>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M84.2726 4.24902C85.4459 4.24902 86.3971 3.29785 86.3971 2.12451C86.3971 0.951172 85.4459 0 84.2726 0C83.0992 0 82.1481 0.951172 82.1481 2.12451C82.1481 3.29785 83.0992 4.24902 84.2726 4.24902ZM18.3101 6.37433C15.9962 6.37433 14.2859 7.24554 13.1792 9.02155C12.1396 7.24554 10.5635 6.37433 8.41724 6.37433C6.30457 6.37433 4.69495 7.17853 3.62183 8.8205V6.80994H0V23.5644H3.62183V14.1819C3.62183 11.2666 5.16443 9.75873 7.34412 9.75873C9.35632 9.75873 10.4965 11.0991 10.4965 13.4112V23.5644H14.1183V14.1819C14.1183 11.2331 15.5267 9.75873 17.7736 9.75873C19.7856 9.75873 21.0265 11.0991 21.0265 13.4112V23.5644H24.6482V13.1766C24.6482 9.02155 22.0996 6.37433 18.3101 6.37433ZM41.1335 9.18909C39.7587 7.31256 37.8136 6.37433 35.2649 6.37433C32.951 6.37433 31.006 7.21204 29.3628 8.92102C27.7196 10.6299 26.9147 12.7075 26.9147 15.1872C26.9147 17.6333 27.7196 19.7444 29.3628 21.4533C31.006 23.1623 32.951 24 35.2649 24C37.8136 24 39.7587 23.0618 41.1335 21.1517V23.5644H44.7554V6.80994H41.1335V9.18909ZM32.0455 19.0407C31.0396 18.0019 30.5365 16.7286 30.5365 15.1872C30.5365 13.6458 31.0396 12.3724 32.0455 11.3671C33.0516 10.3284 34.3259 9.82574 35.8351 9.82574C37.3441 9.82574 38.6184 10.3284 39.6245 11.3671C40.6305 12.3724 41.1335 13.6458 41.1335 15.1872C41.1335 16.7286 40.6305 18.0019 39.6245 19.0407C38.6184 20.046 37.3441 20.5486 35.8351 20.5486C34.3259 20.5486 33.0516 20.046 32.0455 19.0407ZM61.4854 9.02155C62.592 7.24554 64.3024 6.37433 66.6162 6.37433C70.4058 6.37433 72.9543 9.02155 72.9543 13.1766V23.5644H69.3326V13.4112C69.3326 11.0991 68.0918 9.75873 66.0797 9.75873C63.8329 9.75873 62.4243 11.2331 62.4243 14.1819V23.5644H58.8026V13.4112C58.8026 11.0991 57.6624 9.75873 55.6503 9.75873C53.4706 9.75873 51.9279 11.2666 51.9279 14.1819V23.5644H48.3062V6.80994H51.9279V8.8205C53.001 7.17853 54.6107 6.37433 56.7234 6.37433C58.8696 6.37433 60.4458 7.24554 61.4854 9.02155ZM84.0741 24C86.5557 24 88.6349 23.1623 90.3451 21.4533C92.0554 19.7444 92.9274 17.6668 92.9274 15.1872C92.9274 12.7075 92.0554 10.6299 90.3451 8.92102C88.6349 7.21204 86.5557 6.37433 84.0741 6.37433C81.6261 6.37433 79.5133 7.21204 77.8031 8.92102C76.0928 10.6299 75.2208 12.7075 75.2208 15.1872C75.2208 17.6668 76.0928 19.7444 77.8031 21.4533C79.5133 23.1623 81.6261 24 84.0741 24ZM80.3517 18.9737C79.3457 17.9684 78.8427 16.6951 78.8427 15.1872C78.8427 13.6793 79.3457 12.4059 80.3517 11.4006C81.3578 10.3954 82.5985 9.89276 84.0741 9.89276C85.5497 9.89276 86.7904 10.3954 87.7965 11.4006C88.8025 12.4059 89.3055 13.6793 89.3055 15.1872C89.3055 16.6951 88.8025 17.9684 87.7965 18.9737C86.7904 19.9789 85.5497 20.4816 84.0741 20.4816C82.5985 20.4816 81.3578 19.9789 80.3517 18.9737ZM99.1533 8.95453C100.26 7.24554 101.97 6.37433 104.351 6.37433C108.208 6.37433 110.79 8.98804 110.79 13.2772V23.5644H107.168V13.6458C107.168 11.1326 105.726 9.75873 103.412 9.75873C100.864 9.75873 99.1533 11.3336 99.1533 14.584V23.5644H95.5315V6.80994H99.1533V8.95453Z" fill="black"/>
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
