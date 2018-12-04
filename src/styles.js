import fontGraphikRegularWebEot from './resources/fonts/Graphik-Regular-Web.eot'
import fontGraphikRegularWebTtf from './resources/fonts/Graphik-Regular-Web.ttf'
import fontGraphikRegularWebWoff from './resources/fonts/Graphik-Regular-Web.woff'
import fontGraphikRegularWebWoff2 from './resources/fonts/Graphik-Regular-Web.woff2'

import fontGraphikMediumWebEot from './resources/fonts/Graphik-Medium-Web.eot'
import fontGraphikMediumWebTtf from './resources/fonts/Graphik-Medium-Web.ttf'
import fontGraphikMediumWebWoff from './resources/fonts/Graphik-Medium-Web.woff'
import fontGraphikMediumWebWoff2 from './resources/fonts/Graphik-Medium-Web.woff2'

import fontGraphikBoldWebEot from './resources/fonts/Graphik-Bold-Web.eot'
import fontGraphikBoldWebTtf from './resources/fonts/Graphik-Bold-Web.ttf'
import fontGraphikBoldWebWoff from './resources/fonts/Graphik-Bold-Web.woff'
import fontGraphikBoldWebWoff2 from './resources/fonts/Graphik-Bold-Web.woff2'

import styled, { injectGlobal } from 'styled-components'
import { colors, icons } from './constants'

const fonts = {
  regular: 'Graphik Regular',
  medium: 'Graphik Medium',
  bold: 'Graphik Bold'
}

injectGlobal`
  @font-face {
    font-family: ${fonts.regular};
    src: url('${fontGraphikRegularWebEot}');
    src: url('${fontGraphikRegularWebEot}#iefix') format('embedded-opentype'),
        url('${fontGraphikRegularWebWoff2}') format("woff2"),
        url('${fontGraphikRegularWebWoff}') format("woff"),
        url('${fontGraphikRegularWebTtf}') format("truetype");
  }

  @font-face {
    font-family: ${fonts.medium};
    src: url('${fontGraphikMediumWebEot}#iefix') format('embedded-opentype'),
        url('${fontGraphikMediumWebWoff2}') format("woff2"),
        url('${fontGraphikMediumWebWoff}') format("woff"),
        url('${fontGraphikMediumWebTtf}') format("truetype");
  }

  @font-face {
    font-family: ${fonts.bold};
    src: url('${fontGraphikBoldWebEot}#iefix') format('embedded-opentype'),
        url('${fontGraphikBoldWebWoff2}') format("woff2"),
        url('${fontGraphikBoldWebWoff}') format("woff"),
        url('${fontGraphikBoldWebTtf}') format("truetype");
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    padding: 0;

    font: 400 1.4rem/1.5 ${fonts.regular}, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    font-weight: normal;
    font-size: 1.4rem;
    color: ${colors.base};

    overflow-x: hidden;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .app {
    
  }
`

export const Heading1 = styled.h1`
  font-family: ${fonts.medium};
  font-weight: 600;
  font-size: 3.8rem;
  line-height: 1.4;
  margin: 0;

  @media screen and (min-width: 768px) {
    font-size: 5.6rem;
  }
`

export const Heading2 = styled.h2`
  font-family: ${fonts.medium};
  font-weight: 500;
  font-size: 4.2rem;
  line-height: 1.4;
  margin: 0;

  @media screen and (min-width: 768px) {
    font-size: 4.2rem;
  }
`

export const Heading3 = styled.h3`
  font-family: ${fonts.medium};
  font-weight: normal;
  font-size: 1.8rem;
  margin: 0;
  
  @media screen and (min-width: 768px) {
    font-size: 2.4rem;
  }
`

export const Heading4 = styled.h4`
  font-family: ${fonts.medium};
  font-weight: normal;
  font-size: 1.6rem;
  margin: 4rem 0 2rem 0;
  
  @media screen and (min-width: 768px) {
    font-size: 1.8rem;
  }
`

export const Paragraph = styled.p`
  margin: 2rem 0;
  font-family: ${fonts.regular};
  font-size: 1.6rem;

  &:last-child {
    margin-bottom: 0;
  }
  
  @media screen and (min-width: 768px) {
    font-size: 1.8rem;
  }

  ${props => props.lineHeight && `
    line-height: ${props.lineHeight};
  `}
`

export const Link = styled.a`
  display: inline;
  color: ${colors.base}
  text-decoration: none;
  border-bottom: .1rem solid;
  border-color: ${colors.base};
  transition: .2s ease-out;

  &:hover {
    border-color: transparent;
  }

  ${props => props.indigo && `
    color: ${colors.indigo};
    border-color: ${colors.indigo};
  `}

  ${props => props.bordered && `
    border-bottom-width: .5rem;
  `}
`

export const Button = styled.button`
  display: inline-block;
  color: ${colors.white};
  background: ${colors.indigo};
  padding: 1.4rem 2rem;
  border: 0;
  border-radius: .4rem;

  font-family: ${fonts.medium};
  font-weight: 500;
  font-size: 1.4rem;

  transition: .2s;
  outline: 0;
  cursor: pointer;
  
  @media screen and (min-width: 768px) {
    font-size: 1.8rem;
  }

  ${props => props.black && `
    background: ${colors.black};
  `}

  ${props => props.white && `
    background: ${colors.white};
    color: ${colors.indigo};
    box-shadow: inset 0 0 0 1px ${colors.indigo};
  `}

  ${props => props.medium && `
    padding: 1.4rem 2.4rem;
    font-size: 1.8rem;

    @media screen and (min-width: 768px) {
      font-size: 1.8rem;
    }
  `}

  ${props => props.large && `
    padding: 1.6rem 2.4rem;
    font-size: 1.8rem;

    @media screen and (min-width: 768px) {
      font-size: 2.4rem;
    }
  `}

  ${props => props.full && `
    width: 100%;
    text-align: center;
  `}

  ${props => props.disabled && `
    cursor: not-allowed;
    pointer-events: none;
    opacity: .8;
  `}
`

export const Form = styled.form`
  margin-top: 2rem;

  @media screen and (min-width: 768px) {
    margin-top: 4rem;
  }
`

export const Field = styled.div`
  padding: 0 0 3rem 0;
`

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 1.3rem 2rem;
  border-radius: .4rem;
  border: .1rem solid rgba(0,0,0, .1);

  font-family: ${fonts.regular};
  font-size: 1.8rem;
  outline: 0;
  transition: border-color .1s, box-shadow .2s;

  &:focus {
    border-color: ${colors.indigo};
    box-shadow: 0 0 0 .2rem ${colors.indigoLight};
  }
`

export const Textarea = styled.textarea`
  display: block;
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  min-height: 4.6rem;
  padding: 1.4rem 2rem;
  border-radius: .4rem;
  border: .1rem solid rgba(0,0,0, .1);

  font-family: ${fonts.regular};
  font-size: 1.8rem;
  outline: 0;
  transition: border-color .1s, box-shadow .2s;

  &:focus {
    border-color: ${colors.indigo};
    box-shadow: 0 0 0 .2rem ${colors.indigoLight};
  }
`

export const Container = styled.div`
  width: 100%;
  max-width: 104rem;
  padding: 0 2rem;
  margin: 0 auto;
`

export const Header = styled.header``

Header.Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6rem 0;
`

export const Content = styled.main`
  position: relative;
  background: ${colors.white};
  z-index: 2;
`

export const Outer = styled.main`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`

export const Section = styled.section`
  
  ${props => props.full && `
    padding: 4rem 0;
  `}

  @media screen and (min-width: 768px) {
    ${props => props.full && `
      padding: 8rem 0;
    `}
  }

  ${props => props.background && `
    background-color: ${props.background};
  `}

  ${props => props.color && `
    color: ${props.color};
  `}
`

Section.Heading = styled(Heading2)`
  padding-bottom: 4rem;
  margin: 0;

  @media screen and (min-width: 768px) {
    padding-bottom: 6rem;
  }
`

Section.Content = styled.div`

`

export const Nav = styled.nav`
  margin: 0;
  padding: 0;
`

Nav.List = styled.div`
  display: flex;
  align-items: center;
`

Nav.Item = styled.div`
  margin-left: 4rem;
  font-size: 2.4rem;

  display: flex;
  align-items: center;

  ${props => props.divider && `
    &::before {
      content: '/';
      display: block;
      margin-right: 1rem;
    }
  `}
`

Nav.Link = styled.a`
  display: block;
  color: ${colors.base};
  text-decoration: none;
  cursor: pointer;
  transition: color .2s;
  font-size: 2rem;
  
  @media screen and (min-width: 768px) {
    font-size: 2.4rem;
  }
  
  &:hover {
    color: ${colors.indigo};
  }
`

export const Home = styled.div`

  ${Heading1} {
    margin: 0 0 4rem 0;
    color: ${colors.indigo};
  }

  ${Paragraph} {
    font-size: 2rem;
    margin: 0 0 3rem 0;

    &:last-child {
      margin: 0;
    }

    @media screen and (min-width: 768px) {
      font-size: 2.6rem;
    }
  }

`

export const Staff = styled.div``

Staff.Card = styled.div`
  position: relative;
  height: 100%;
  padding: 2rem 0;
  background: #fff;
  border-bottom: .5rem solid ${colors.base};
  margin-bottom: 4rem;
  cursor: default;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -.5rem;
    width: 0;
    height: .5rem;
    background: ${colors.indigo};
    transition: width .2s ease-out;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }
`

Staff.Card.Photo = styled.div`
  flex-shrink: 0;
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 100%;
  background: #ececec;
  margin-right: 2rem;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 2rem;

  ${props => props.source && `
    background-image: url(${props.source});
  `}
`

Staff.Card.Info = styled.div``

Staff.Card.Info.Name = styled(Heading4)`
  max-width: 50%;
  margin: 0 0 1rem 0;
`
Staff.Card.Info.Position = styled.div`
  font-size: 1.6rem;
  color: #777;
`

export const Footer = styled.footer`
  position: relative;
  color: ${colors.white};
`

Footer.Inner = styled.div`
  padding: 4rem 0 0 0;

  @media screen and (min-width: 992px) {
    padding: 8rem 0 0 0;
  }
`

Footer.Heading = styled(Heading1)`
  line-height: 1.2;
  margin: 0 0 2rem 0;
`

Footer.List = styled.div`

`

Footer.List.Item = styled.div`
  display: flex;
  margin-bottom: 2rem;
  font-size: 2.2rem;

  &:last-child {
    margin-bottom: 0;
  }
  
  @media screen and (min-width: 768px) {
    font-size: 3.6rem;
  }
`

Footer.List.Link = styled.a`
  font-size: 2.2rem;
  color: ${colors.white};
  text-decoration: none;
  transition: opacity .2s;

  &:hover {
    opacity: .6;
  }

  @media screen and (min-width: 768px) {
    font-size: 3.6rem;
  }
`

Footer.Contacts = styled.div`
  margin-top: 4rem;
  padding: 4rem 0;
  border-top: .2rem solid rgba(255, 255, 255, .1);
  color: rgba(255, 255, 255, .5);
  font-size: 1.8rem;

  @media screen and (min-width: 992px) {
    margin-top: 6rem;
    font-size: 2.1rem;
  } 
`

export const Client = styled.div`
  margin: 2rem 0;
  height: 5rem;

  display: flex;
  align-items: center;
  opacity: .3;
`

Client.Icon = styled.img`
  display: block;
  max-width: 100%;
  opacity: .8;
`

export const Cookies = styled.div`
  position: fixed;
  right: 2rem;
  bottom: 2rem;

  padding: 2rem;
  max-width: 38rem;
  border-radius: .4rem;
  border: .1rem solid rgba(255,255,255,.1);
  box-shadow: 0 .1rem 0 rgba(0,0,0,.05), 0 .2rem .6rem rgba(0,0,0,.05), 0 1rem 2rem rgba(0,0,0,.05);
  background: ${colors.white};

  transform: translateX(6rem);
  opacity: 0;
  visibility: hidden;
  transition: all .2s;
  z-index: 5;

  ${props => props.show && `
    visibility: visible;
    opacity: 1;
    transform: translateX(0);
  `}
`

Cookies.Inner = styled.div`
  
`

Cookies.Message = styled.div`
  font-size: 1.5rem;
`

Cookies.Controls = styled.div`
  padding-top: 2rem;

  ${Button} {
    margin-right: 2rem;
  }
`

export const Alert = styled.div`
  font-family: ${fonts.regular};
  padding: 1.3rem 2rem;
  border-radius: .4rem;
  color: #fff;

  @media screen and (min-width: 768px) {
    font-size: 1.8rem;
  }

  ${props => props.error && `
    background: #BF1E31;
  `}

  ${props => props.success && `
    background: #00a654;
  `}
`

export const Row = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-left: -2rem;
  margin-right: -2rem;
`

export const Col = styled.div`
  width: 100%;
  padding: 0 2rem;

  ${props => props.sm && `
    @media screen and (min-width: 576px) {
      width: ${100 / 12 * props.sm}%;
    }
  `}

  ${props => props.smOffset && `
    @media screen and (min-width: 576px) {
      margin-left: ${100 / 12 * props.smOffset}%;
    }
  `}

  ${props => props.md && `
    @media screen and (min-width: 768px) {
      width: ${100 / 12 * props.md}%;
    }
  `}

  ${props => props.mdOffset && `
    @media screen and (min-width: 768px) {
      margin-left: ${100 / 12 * props.mdOffset}%;
    }
  `}

  ${props => props.align && `
    text-align: ${props.align};
  `}

`

export const Service = styled.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 4rem;
  }
`

Service.Icon = styled.div`
  width: 4rem;
  margin-bottom: 2rem;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`

Service.Heading = styled.div`
  font-family: ${fonts.medium};
  font-size: 2.4rem;
  margin-bottom: 2rem;
`
Service.Thumb = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 4rem;
  height: 8rem;
`
Service.List = styled.div``
Service.Item = styled.div`
  font-size: 1.6rem;
  margin-bottom: .2rem;

  &::before {
    content: '\\2014';
    padding-right: .6rem;
  }
`

export const CTA = styled.div`
  position: relative;
  margin: 0 8rem;
  padding: 8rem 0;
  background: ${colors.indigo};

  ${Paragraph} {
    line-height: 1.8;
    margin: 2rem 0 4rem 0;
    opacity: .8;
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(10deg);
    width: 4rem;
    height: 110%;
    background: ${colors.white};
    z-index: 2;
  }
`

CTA.Image = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 48%;
  clip-path: polygon(9% 0, 100% 0%, 100% 100%, 0 100%);

  background-image: url(${icons.image1});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 1;
`

export const Chat = styled.div`
  display: flex;
  flex-direction: column;
`

Chat.Message = styled.div`
  max-width: 28rem;
  padding: 1.5rem 1.5rem 1.3rem 1.5rem;
  font-size: 1.6rem;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  ${props => props.type === 'in' && `
    border-radius: 2rem 2rem 2rem 0;
    background: #eee;
    color: ${colors.base};
    align-self: flex-start;
  `}

  ${props => props.type === 'out' && `
    border-radius: 2rem 2rem 0 2rem;
    background: ${colors.indigo};
    color: ${colors.white};
    align-self: flex-end;
  `}
`

export const Messangers = styled.div`
  display: flex;
  align-items: center;
`

Messangers.Item = styled.div`
  width: 8rem;
  opacity: .8;

  &:not(:last-child) {
    margin-right: 2rem;
  }

  ${props => props.width && `
    width: ${props.width};
  `}
`

Messangers.Icon = styled.img`
  display: block;
  width: 100%;
  height: auto;
`

export const Social = styled.div`
  display: inline-flex;
  margin-left: auto;
`

Social.Item = styled.a`
  display: block;
  opacity: .6;
  transition: opacity .2s ease-out;
  cursor: pointer;

  &:not(:last-child) {
    margin: 0 2rem 0 0;
  }

  &:hover {
    opacity: 1;
  }
`

Social.Icon = styled.div`
  svg {
    color: ${colors.white};
    width: 2.4rem !important;
    height: 2.4rem;
  }
`
