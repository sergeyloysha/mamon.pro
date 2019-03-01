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
                    <div className='stat__count'><div>16</div></div>
                    <div className='stat__text'><div>Projects<br />launched</div></div>
                  </div>
                </div>
                <div className='col-xs-6 col-md-3'>
                  <div className='stat'>
                    <div className='stat__count'><div>04</div></div>
                    <div className='stat__text'><div>Countries<br />represented</div></div>
                  </div>
                </div>
                <div className='col-xs-6 col-md-3'>
                  <div className='stat'>
                    <div className='stat__count'><div>03</div></div>
                    <div className='stat__text'><div>Years in<br />business</div></div>
                  </div>
                </div>
                <div className='col-xs-6 col-md-3'>
                  <div className='stat'>
                    <div className='stat__count'><div>08</div></div>
                    <div className='stat__text'><div>In-house<br />employees</div></div>
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
                        <div className='card__item'>User Experience (UX)</div>
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

              <div className='collage'><div className='Collage__CollageImage-s1j63792-2 hQsFHJ Image__Container-s1g7n88a-0 eyQSBz' style={{ width: '189px', left: '-0.0694444%', top: '175px' }}><picture><source srcSet='https://d2998a9lzvovjv.cloudfront.net/collage-1@1x.fd4de71e.webp 1x,https://d2998a9lzvovjv.cloudfront.net/collage-1@2x.089cd7f6.webp 2x,https://d2998a9lzvovjv.cloudfront.net/collage-1@3x.76949bdf.webp 3x,https://d2998a9lzvovjv.cloudfront.net/collage-1@4x.606a4762.webp 4x' type='image/webp' /><source srcSet='https://d2998a9lzvovjv.cloudfront.net/collage-1@1x.c7b776f8.png 1x,https://d2998a9lzvovjv.cloudfront.net/collage-1@2x.f884ab14.png 2x,https://d2998a9lzvovjv.cloudfront.net/collage-1@3x.18b756d8.png 3x,https://d2998a9lzvovjv.cloudfront.net/collage-1@4x.3a91e8ec.png 4x' type='image/png' /><img src='https://d2998a9lzvovjv.cloudfront.net/collage-1@1x.c7b776f8.png' /></picture><span style={{ transition: 'opacity 0.3s ease-in-out 0s', opacity: 0, background: 'url("data:image/png' }} /></div><div className='Collage__CollageImage-s1j63792-2 hQsFHJ Image__Container-s1g7n88a-0 hctAME' style={{ width: '199px', left: '6.11111%', top: '534px', zIndex: 9 }}><picture><source srcSet='https://d2998a9lzvovjv.cloudfront.net/collage-2@1x.1ddf04cc.webp 1x,https://d2998a9lzvovjv.cloudfront.net/collage-2@2x.bee6cacc.webp 2x,https://d2998a9lzvovjv.cloudfront.net/collage-2@3x.b97ba315.webp 3x,https://d2998a9lzvovjv.cloudfront.net/collage-2@4x.35bb51fc.webp 4x' type='image/webp' /><source srcSet='https://d2998a9lzvovjv.cloudfront.net/collage-2@1x.3c561a1a.png 1x,https://d2998a9lzvovjv.cloudfront.net/collage-2@2x.ddd335ca.png 2x,https://d2998a9lzvovjv.cloudfront.net/collage-2@3x.e0ec8046.png 3x,https://d2998a9lzvovjv.cloudfront.net/collage-2@4x.1f10a742.png 4x' type='image/png' /><img src='https://d2998a9lzvovjv.cloudfront.net/collage-2@1x.3c561a1a.png' /></picture><span style={{ transition: 'opacity 0.3s ease-in-out 0s', opacity: 0, background: 'url("data:image/png' }} /></div><div className='Collage__CollageImage-s1j63792-2 hQsFHJ Image__Container-s1g7n88a-0 kHroIa' style={{ width: '576px', left: '37.2917%', top: '233px', zIndex: 11 }}><picture><source srcSet='https://d2998a9lzvovjv.cloudfront.net/collage-3@1x.ba97e896.webp 1x,https://d2998a9lzvovjv.cloudfront.net/collage-3@2x.1bd45685.webp 2x,https://d2998a9lzvovjv.cloudfront.net/collage-3@3x.f6f1821f.webp 3x,https://d2998a9lzvovjv.cloudfront.net/collage-3@4x.219bf58f.webp 4x' type='image/webp' /><source srcSet='https://d2998a9lzvovjv.cloudfront.net/collage-3@1x.f656dce9.png 1x,https://d2998a9lzvovjv.cloudfront.net/collage-3@2x.15f1c309.png 2x,https://d2998a9lzvovjv.cloudfront.net/collage-3@3x.d12ae5e6.png 3x,https://d2998a9lzvovjv.cloudfront.net/collage-3@4x.95a0079c.png 4x' type='image/png' /><img src='https://d2998a9lzvovjv.cloudfront.net/collage-3@1x.f656dce9.png' /></picture><span style={{ transition: 'opacity 0.3s ease-in-out 0s', opacity: 0, background: 'url("data:image/png' }} /></div><div className='Collage__CollageImage-s1j63792-2 hQsFHJ Image__Container-s1g7n88a-0 huDhZb' style={{ width: '258px', left: '14.3056%', top: '305px' }}><picture><source srcSet='https://d2998a9lzvovjv.cloudfront.net/collage-4@1x.b7390f2d.webp 1x,https://d2998a9lzvovjv.cloudfront.net/collage-4@2x.f85c3b70.webp 2x,https://d2998a9lzvovjv.cloudfront.net/collage-4@3x.9b45726e.webp 3x,https://d2998a9lzvovjv.cloudfront.net/collage-4@4x.4e905c1b.webp 4x' type='image/webp' /><source srcSet='https://d2998a9lzvovjv.cloudfront.net/collage-4@1x.43e9845e.png 1x,https://d2998a9lzvovjv.cloudfront.net/collage-4@2x.97b0478c.png 2x,https://d2998a9lzvovjv.cloudfront.net/collage-4@3x.0fb543a3.png 3x,https://d2998a9lzvovjv.cloudfront.net/collage-4@4x.21b82cf4.png 4x' type='image/png' /><img src='https://d2998a9lzvovjv.cloudfront.net/collage-4@1x.43e9845e.png' /></picture><span style={{ transition: 'opacity 0.3s ease-in-out 0s', opacity: 0, background: 'url("data:image/png' }} /></div><div className='Collage__CollageImage-s1j63792-2 hQsFHJ Image__Container-s1g7n88a-0 klwVVD' style={{ width: '203px', left: '2.91667%', top: '23px' }}><picture><source srcSet='https://d2998a9lzvovjv.cloudfront.net/collage-5@1x.62351a6a.webp 1x,https://d2998a9lzvovjv.cloudfront.net/collage-5@2x.ffc30afe.webp 2x,https://d2998a9lzvovjv.cloudfront.net/collage-5@3x.4bfed463.webp 3x,https://d2998a9lzvovjv.cloudfront.net/collage-5@4x.38a2e176.webp 4x' type='image/webp' /><source srcSet='https://d2998a9lzvovjv.cloudfront.net/collage-5@1x.690c7042.png 1x,https://d2998a9lzvovjv.cloudfront.net/collage-5@2x.416420fb.png 2x,https://d2998a9lzvovjv.cloudfront.net/collage-5@3x.2e329214.png 3x,https://d2998a9lzvovjv.cloudfront.net/collage-5@4x.44863d9e.png 4x' type='image/png' /><img src='https://d2998a9lzvovjv.cloudfront.net/collage-5@1x.690c7042.png' /></picture><span style={{ transition: 'opacity 0.3s ease-in-out 0s', opacity: 0, background: 'url("data:image/png' }} /></div><div className='Collage__CollageImage-s1j63792-2 hQsFHJ Image__Container-s1g7n88a-0 eCXGPN' style={{ width: '511px', left: '20.8333%', top: '15px', zIndex: 8 }}><picture><source srcSet='https://d2998a9lzvovjv.cloudfront.net/collage-6@1x.0f17a2f5.webp 1x,https://d2998a9lzvovjv.cloudfront.net/collage-6@2x.89d9ce9b.webp 2x,https://d2998a9lzvovjv.cloudfront.net/collage-6@3x.4d704ccf.webp 3x,https://d2998a9lzvovjv.cloudfront.net/collage-6@4x.683bd15b.webp 4x' type='image/webp' /><source srcSet='https://d2998a9lzvovjv.cloudfront.net/collage-6@1x.b92a5336.png 1x,https://d2998a9lzvovjv.cloudfront.net/collage-6@2x.f672f359.png 2x,https://d2998a9lzvovjv.cloudfront.net/collage-6@3x.60ba96b0.png 3x,https://d2998a9lzvovjv.cloudfront.net/collage-6@4x.fb612306.png 4x' type='image/png' /><img src='https://d2998a9lzvovjv.cloudfront.net/collage-6@1x.b92a5336.png' /></picture><span style={{ transition: 'opacity 0.3s ease-in-out 0s', opacity: 0, background: 'url("data:image/png' }} /></div><div className='Collage__CollageImage-s1j63792-2 hQsFHJ Image__Container-s1g7n88a-0 lfjFBf' style={{ width: '630px', left: '15.4167%', top: '454px' }}><picture><source srcSet='https://d2998a9lzvovjv.cloudfront.net/collage-7@1x.40ac5dcc.webp 1x,https://d2998a9lzvovjv.cloudfront.net/collage-7@2x.4d9a61bd.webp 2x,https://d2998a9lzvovjv.cloudfront.net/collage-7@3x.a05fc08f.webp 3x,https://d2998a9lzvovjv.cloudfront.net/collage-7@4x.f46d1430.webp 4x' type='image/webp' /><source srcSet='https://d2998a9lzvovjv.cloudfront.net/collage-7@1x.3a7273e7.png 1x,https://d2998a9lzvovjv.cloudfront.net/collage-7@2x.d3183c7c.png 2x,https://d2998a9lzvovjv.cloudfront.net/collage-7@3x.d02a152a.png 3x,https://d2998a9lzvovjv.cloudfront.net/collage-7@4x.b679bb10.png 4x' type='image/png' /><img src='https://d2998a9lzvovjv.cloudfront.net/collage-7@1x.3a7273e7.png' /></picture><span style={{ transition: 'opacity 0.3s ease-in-out 0s', opacity: 0, background: 'url("data:image/png' }} /></div><div className='Collage__CollageImage-s1j63792-2 hQsFHJ Image__Container-s1g7n88a-0 kEkWaL' style={{ width: '83px', left: '90.9028%', top: '119px', zIndex: 11 }}><picture><source srcSet='https://d2998a9lzvovjv.cloudfront.net/collage-8@1x.f6ec69a6.webp 1x,https://d2998a9lzvovjv.cloudfront.net/collage-8@2x.33268317.webp 2x,https://d2998a9lzvovjv.cloudfront.net/collage-8@3x.7069b509.webp 3x,https://d2998a9lzvovjv.cloudfront.net/collage-8@4x.fdf64205.webp 4x' type='image/webp' /><source srcSet='https://d2998a9lzvovjv.cloudfront.net/collage-8@1x.13f5e54b.png 1x,https://d2998a9lzvovjv.cloudfront.net/collage-8@2x.77529390.png 2x,https://d2998a9lzvovjv.cloudfront.net/collage-8@3x.c4eec33b.png 3x,https://d2998a9lzvovjv.cloudfront.net/collage-8@4x.8fee8eef.png 4x' type='image/png' /><img src='https://d2998a9lzvovjv.cloudfront.net/collage-8@1x.13f5e54b.png' /></picture><span style={{ transition: 'opacity 0.3s ease-in-out 0s', opacity: 0, background: 'url("data:image/png' }} /></div><div className='Collage__CollageImage-s1j63792-2 hQsFHJ Image__Container-s1g7n88a-0 kPelH' style={{ width: '449px', left: '71.5972%', top: '184px' }}><picture><source srcSet='https://d2998a9lzvovjv.cloudfront.net/collage-9@1x.d0cdd79a.webp 1x,https://d2998a9lzvovjv.cloudfront.net/collage-9@2x.c6d0a719.webp 2x,https://d2998a9lzvovjv.cloudfront.net/collage-9@3x.ae306114.webp 3x,https://d2998a9lzvovjv.cloudfront.net/collage-9@4x.49fd991d.webp 4x' type='image/webp' /><source srcSet='https://d2998a9lzvovjv.cloudfront.net/collage-9@1x.45b0ab7b.png 1x,https://d2998a9lzvovjv.cloudfront.net/collage-9@2x.ebb1d044.png 2x,https://d2998a9lzvovjv.cloudfront.net/collage-9@3x.400d73b3.png 3x,https://d2998a9lzvovjv.cloudfront.net/collage-9@4x.06f1ae03.png 4x' type='image/png' /><img src='https://d2998a9lzvovjv.cloudfront.net/collage-9@1x.45b0ab7b.png' /></picture><span style={{ transition: 'opacity 0.3s ease-in-out 0s', opacity: 0, background: 'url("data:image/png' }} /></div><div className='Collage__CollageImage-s1j63792-2 hQsFHJ Image__Container-s1g7n88a-0 cwnnLK' style={{ width: '532px', left: '72.4306%', top: '462px' }}><picture><img src='https://d2998a9lzvovjv.cloudfront.net/collage-10@1x.f47f643e.png' /></picture></div><div className='Collage__CollageImage-s1j63792-2 hQsFHJ Image__Container-s1g7n88a-0 kEkWaL' style={{ width: '46px', left: '15.5556%', top: '68px', zIndex: 12 }}><picture><source srcSet='https://d2998a9lzvovjv.cloudfront.net/collage-11@1x.c21d12cd.webp 1x,https://d2998a9lzvovjv.cloudfront.net/collage-11@2x.beeb3461.webp 2x,https://d2998a9lzvovjv.cloudfront.net/collage-11@3x.8bf274ce.webp 3x,https://d2998a9lzvovjv.cloudfront.net/collage-11@4x.4cfc8dd8.webp 4x' type='image/webp' /><source srcSet='https://d2998a9lzvovjv.cloudfront.net/collage-11@1x.f37e4bc7.png 1x,https://d2998a9lzvovjv.cloudfront.net/collage-11@2x.590c5440.png 2x,https://d2998a9lzvovjv.cloudfront.net/collage-11@3x.5cabb264.png 3x,https://d2998a9lzvovjv.cloudfront.net/collage-11@4x.6a9041c7.png 4x' type='image/png' /><img src='https://d2998a9lzvovjv.cloudfront.net/collage-11@1x.f37e4bc7.png' /></picture><span style={{ transition: 'opacity 0.3s ease-in-out 0s', opacity: 0, background: 'url("data:image/png' }} /></div><div className='Collage__CollageImage-s1j63792-2 hQsFHJ Image__Container-s1g7n88a-0 bozCth' style={{ width: '202px', left: '31.1111%', top: '378px', zIndex: 9 }}><picture><source srcSet='https://d2998a9lzvovjv.cloudfront.net/collage-12@1x.7282ce0f.webp 1x,https://d2998a9lzvovjv.cloudfront.net/collage-12@2x.264b48ac.webp 2x,https://d2998a9lzvovjv.cloudfront.net/collage-12@3x.80a3f492.webp 3x,https://d2998a9lzvovjv.cloudfront.net/collage-12@4x.dd45a6ca.webp 4x' type='image/webp' /><source srcSet='https://d2998a9lzvovjv.cloudfront.net/collage-12@1x.ef192dcb.png 1x,https://d2998a9lzvovjv.cloudfront.net/collage-12@2x.2ea0dcce.png 2x,https://d2998a9lzvovjv.cloudfront.net/collage-12@3x.52eb11e0.png 3x,https://d2998a9lzvovjv.cloudfront.net/collage-12@4x.91861cd0.png 4x' type='image/png' /><img src='https://d2998a9lzvovjv.cloudfront.net/collage-12@1x.ef192dcb.png' /></picture><span style={{ transition: 'opacity 0.3s ease-in-out 0s', opacity: 0, background: 'url("data:image/png' }} /></div><div className='Collage__CollageImage-s1j63792-2 hQsFHJ Image__Container-s1g7n88a-0 iFybvL' style={{ width: '124px', left: '49.2361%', top: '68px', zIndex: 9 }}><picture><source srcSet='https://d2998a9lzvovjv.cloudfront.net/collage-13@1x.2cc33741.webp 1x,https://d2998a9lzvovjv.cloudfront.net/collage-13@2x.1b73a06d.webp 2x,https://d2998a9lzvovjv.cloudfront.net/collage-13@3x.9af37c5c.webp 3x,https://d2998a9lzvovjv.cloudfront.net/collage-13@4x.82025dcf.webp 4x' type='image/webp' /><source srcSet='https://d2998a9lzvovjv.cloudfront.net/collage-13@1x.db41a61f.png 1x,https://d2998a9lzvovjv.cloudfront.net/collage-13@2x.98a4f2bb.png 2x,https://d2998a9lzvovjv.cloudfront.net/collage-13@3x.a6c686bd.png 3x,https://d2998a9lzvovjv.cloudfront.net/collage-13@4x.947a9052.png 4x' type='image/png' /><img src='https://d2998a9lzvovjv.cloudfront.net/collage-13@1x.db41a61f.png' /></picture><span style={{ transition: 'opacity 0.3s ease-in-out 0s', opacity: 0, background: 'url("data:image/png' }} /></div><div className='Collage__CollageImage-s1j63792-2 hQsFHJ Image__Container-s1g7n88a-0 lgExRi' style={{ width: '68px', left: '58.0556%', top: '23px' }}><picture><source srcSet='https://d2998a9lzvovjv.cloudfront.net/collage-14@1x.7d7f72ec.webp 1x,https://d2998a9lzvovjv.cloudfront.net/collage-14@2x.b0fade54.webp 2x,https://d2998a9lzvovjv.cloudfront.net/collage-14@3x.e161cf5d.webp 3x,https://d2998a9lzvovjv.cloudfront.net/collage-14@4x.0303e547.webp 4x' type='image/webp' /><source srcSet='https://d2998a9lzvovjv.cloudfront.net/collage-14@1x.89ac75ec.png 1x,https://d2998a9lzvovjv.cloudfront.net/collage-14@2x.e0a6d85f.png 2x,https://d2998a9lzvovjv.cloudfront.net/collage-14@3x.04cd468d.png 3x,https://d2998a9lzvovjv.cloudfront.net/collage-14@4x.4121d0b1.png 4x' type='image/png' /><img src='https://d2998a9lzvovjv.cloudfront.net/collage-14@1x.89ac75ec.png' /></picture><span style={{ transition: 'opacity 0.3s ease-in-out 0s', opacity: 0, background: 'url("data:image/png' }} /></div><div className='Collage__CollageImage-s1j63792-2 hQsFHJ Image__Container-s1g7n88a-0 kEkWaL' style={{ width: '48px', left: '59.7222%', top: '108px' }}><picture><source srcSet='https://d2998a9lzvovjv.cloudfront.net/collage-15@1x.9f83ccd9.webp 1x,https://d2998a9lzvovjv.cloudfront.net/collage-15@2x.320fe847.webp 2x,https://d2998a9lzvovjv.cloudfront.net/collage-15@3x.95c9cbab.webp 3x,https://d2998a9lzvovjv.cloudfront.net/collage-15@4x.41078a42.webp 4x' type='image/webp' /><source srcSet='https://d2998a9lzvovjv.cloudfront.net/collage-15@1x.bdbfe07b.png 1x,https://d2998a9lzvovjv.cloudfront.net/collage-15@2x.c1ba7be7.png 2x,https://d2998a9lzvovjv.cloudfront.net/collage-15@3x.c2a43701.png 3x,https://d2998a9lzvovjv.cloudfront.net/collage-15@4x.e5bb43b9.png 4x' type='image/png' /><img src='https://d2998a9lzvovjv.cloudfront.net/collage-15@1x.bdbfe07b.png' /></picture><span style={{ transition: 'opacity 0.3s ease-in-out 0s', opacity: 0, background: 'url("data:image/png' }} /></div><div className='Collage__CollageImage-s1j63792-2 hQsFHJ Image__Container-s1g7n88a-0 bYdtqt' style={{ width: '391px', left: '64.2361%', top: '31px' }}><picture><source srcSet='https://d2998a9lzvovjv.cloudfront.net/collage-16@1x.2c8ae6a7.webp 1x,https://d2998a9lzvovjv.cloudfront.net/collage-16@2x.f683be05.webp 2x,https://d2998a9lzvovjv.cloudfront.net/collage-16@3x.24195862.webp 3x,https://d2998a9lzvovjv.cloudfront.net/collage-16@4x.3cddeead.webp 4x' type='image/webp' /><source srcSet='https://d2998a9lzvovjv.cloudfront.net/collage-16@1x.9c0e3cac.png 1x,https://d2998a9lzvovjv.cloudfront.net/collage-16@2x.671cfe0b.png 2x,https://d2998a9lzvovjv.cloudfront.net/collage-16@3x.35519794.png 3x,https://d2998a9lzvovjv.cloudfront.net/collage-16@4x.4c0dd995.png 4x' type='image/png' /><img src='https://d2998a9lzvovjv.cloudfront.net/collage-16@1x.9c0e3cac.png' /></picture><span style={{ transition: 'opacity 0.3s ease-in-out 0s', opacity: 0, background: 'url("data:image/png' }} /></div><div className='Collage__CollageImage-s1j63792-2 hQsFHJ Image__Container-s1g7n88a-0 kEkWaL' style={{ width: '76px', left: '65.0694%', top: '-2px', zIndex: 10 }}><picture><source srcSet='https://d2998a9lzvovjv.cloudfront.net/collage-17@1x.23399015.webp 1x,https://d2998a9lzvovjv.cloudfront.net/collage-17@2x.a881d746.webp 2x,https://d2998a9lzvovjv.cloudfront.net/collage-17@3x.a29ac686.webp 3x,https://d2998a9lzvovjv.cloudfront.net/collage-17@4x.e8539725.webp 4x' type='image/webp' /><source srcSet='https://d2998a9lzvovjv.cloudfront.net/collage-17@1x.9d568820.png 1x,https://d2998a9lzvovjv.cloudfront.net/collage-17@2x.8eb1df59.png 2x,https://d2998a9lzvovjv.cloudfront.net/collage-17@3x.390dc26c.png 3x,https://d2998a9lzvovjv.cloudfront.net/collage-17@4x.c230c346.png 4x' type='image/png' /><img src='https://d2998a9lzvovjv.cloudfront.net/collage-17@1x.9d568820.png' /></picture><span style={{ transition: 'opacity 0.3s ease-in-out 0s', opacity: 0, background: 'url("data:image/png' }} /></div><div className='Collage__CollageImage-s1j63792-2 hQsFHJ Image__Container-s1g7n88a-0 bYWDFv' style={{ width: '250px', left: '44.375%', top: '659px' }}><picture><source srcSet='https://d2998a9lzvovjv.cloudfront.net/collage-18@1x.e19342b1.webp 1x,https://d2998a9lzvovjv.cloudfront.net/collage-18@2x.a8f3d5cb.webp 2x,https://d2998a9lzvovjv.cloudfront.net/collage-18@3x.641737cc.webp 3x,https://d2998a9lzvovjv.cloudfront.net/collage-18@4x.130ecbfa.webp 4x' type='image/webp' /><source srcSet='https://d2998a9lzvovjv.cloudfront.net/collage-18@1x.be742367.png 1x,https://d2998a9lzvovjv.cloudfront.net/collage-18@2x.b02b6260.png 2x,https://d2998a9lzvovjv.cloudfront.net/collage-18@3x.739b6a28.png 3x,https://d2998a9lzvovjv.cloudfront.net/collage-18@4x.07ba1289.png 4x' type='image/png' /><img src='https://d2998a9lzvovjv.cloudfront.net/collage-18@1x.be742367.png' /></picture><span style={{ transition: 'opacity 0.3s ease-in-out 0s', opacity: 0, background: 'url("data:image/png' }} /></div></div>
            </div>
          </section>

          <section className='section section_gray'>
            <div className='container'>
              <div className='section__content'>
                <div className='row'>
                  <div className='col-md-8 col-md-offset-2'>
                    <div className='card card_center card_clear'>
                      <h2 className='card__title'>Let's talk</h2>
                      <div className='card__text'>We would love for you to tell us more about your product; what it’s about and what you believe needs improvement.</div>
                      <div className='card__button'>
                        <a className='button' href='mailto:hello@mamon.pro'>Talk to us</a>
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
