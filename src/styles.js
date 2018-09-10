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
import constants from './constants/index'

const { colors } = constants

injectGlobal`
  @font-face {
    font-family: 'Graphik Regular';
    src: url('${fontGraphikRegularWebEot}');
    src: url('${fontGraphikRegularWebEot}#iefix') format('embedded-opentype'),
        url('${fontGraphikRegularWebWoff2}') format("woff2"),
        url('${fontGraphikRegularWebWoff}') format("woff"),
        url('${fontGraphikRegularWebTtf}') format("truetype");
  }

  @font-face {
    font-family: 'Graphik Medium';
    src: url('${fontGraphikMediumWebEot}#iefix') format('embedded-opentype'),
        url('${fontGraphikMediumWebWoff2}') format("woff2"),
        url('${fontGraphikMediumWebWoff}') format("woff"),
        url('${fontGraphikMediumWebTtf}') format("truetype");
  }

  @font-face {
    font-family: 'Graphik Bold';
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

    font: 400 1.4rem/1.5 'Graphik Regular', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    font-weight: normal;
    font-size: 1.4rem;
    color: ${colors.base};

    overflow-x: hidden;
  }

  .app {
    
  }
`

export const Container = styled.div`
  width: 100%;
  max-width: 107rem;
  padding: 0 2rem;
  margin: 0 auto;
`

export const App = styled.div`
  margin: 0;
`

App.Header = styled.header`
  padding: 5rem 0;
`

App.Header.Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
`

Logo.Source = styled.div`
  display: block;
  width: 4.8rem;
  height: 4.8rem;
  transform: rotate(-45deg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  ${props => props.source && `
    background-image: url(${props.source});
  `}
`

Logo.Title = styled.div`
  font-weight: 600;
  font-size: 2.8rem;
  margin-left: 2rem;
`

App.Nav = styled.nav`

`

App.Content = styled.main`

`

export const Section = styled.section``

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
`

Home.Inner = styled.div`

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`

Home.Heading = styled.h1`
  margin: 4rem 0 6rem 0;
  font-family: 'Graphik Bold';
  font-size: 3.6rem;
  line-height: 1.2;

  @media screen and (min-width: 768px) {
    font-size: 5rem;
    max-width: 63rem;
  }
`

Home.Description = styled.div`
`

Home.Description.Paragraph = styled.p`
  margin: 0 0 3rem 0;
  font-size: 1.8rem;

  @media screen and (min-width: 768px) {
    font-size: 2.4rem;
    max-width: 63rem;
  }
`

export const Staff = styled.div`

  @media screen and (min-width: 768px) {
    padding: 5rem 0;
  }
`

Staff.List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: -2rem;
  margin-right: -2rem;
`

Staff.Item = styled.div`
  width: 100%;
  padding: 0 2rem;
  margin-bottom: 5rem;

  @media screen and (min-width: 600px) {
    width: 25%;
  }
`

Staff.Card = styled.div`
  height: 100%;
  padding: 3rem;
  position: relative;
  border-radius: .5rem;
  background: #fff;
  box-shadow: 0 1rem 4rem rgba(98, 122, 129, 0.13);
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

Staff.Card.Info.Name = styled.div`
  font-family: 'Graphik Medium';
  font-size: 1.8rem;
  max-width: 60%;
`
Staff.Card.Info.Position = styled.div`
  font-size: 1.6rem;
  color: #777;
`

export const Footer = styled.footer`
  position: relative;
  color: ${colors.white};
  background: ${colors.base};
`

Footer.Inner = styled.div`
  padding: 5rem 0 0 0;

  @media screen and (min-width: 992px) {
    padding: 9rem 0 0 0;
  }
`

Footer.Heading = styled.h1`
  margin: 3rem 0 2rem 0;
  font-family: 'Graphik Bold';
  font-size: 3.2rem;
  line-height: 1.2;

  @media screen and (min-width: 768px) {
    margin: 6rem 0 4rem 0;
    font-size: 5rem;
  }
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
  margin-top: 5rem;
  padding: 4rem 0;
  border-top: .2rem solid #545454;
  color: #545454;
  font-size: 1.8rem;

  @media screen and (min-width: 992px) {
    margin-top: 9rem;
    font-size: 2.1rem;
  } 
`

export const Services = styled.div`
  padding: 5rem 0;
  @media screen and (min-width: 768px) {
    padding: 5rem 0;
  }
`

Services.List = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -2rem;
  margin-right: -2rem;
  justify-content: center;
`

Services.Item = styled.div`
  padding: 0 2rem 5rem 2rem;
  text-align: center;
  width: 100%;
  
  @media screen and (min-width: 600px) {
    width: 50%;
  }
  @media screen and (min-width: 768px) {
    text-align: left;
  }
`

export const Service = styled.div`
  position: relative;
  @media screen and (min-width: 768px) {
    padding-right: 10rem;
  }
`

Service.Icon = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  @media screen and (min-width: 768px) {
    left: 0;
    transform: translateX(0);
  }
  
`
Service.Heading = styled.h2`
  padding-top: 9rem;
  font-family: 'Graphik Medium';
  font-weight: normal;
  font-size: 2.2rem;
  line-height: 1.2;
  margin: 0 0 2rem 0;
  @media screen and (min-width: 768px) {
    font-size: 2.8rem;
  }
`
Service.Description = styled.div`
  font-size: 1.6rem;
  color: #777;
  max-width: 30rem;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    max-width: 42rem;
    margin: 0;
    font-size: 1.8rem;
  }
`

export const Clients = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    background: #fbfbfb;
  }
`

Clients.List = styled.div`
  padding: 5rem 0;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-left: -2rem;
  margin-right: -2rem;
`

Clients.Item = styled.div`
  padding: 0 2rem;
  margin: 2rem 0;
  width: 25%;
  height: 5rem;

  display: flex;
  align-items: center;
`

Clients.Icon = styled.img`
  display: block;
  max-width: 100%;
  opacity: .7;
`

export const Projects = styled.div`

`

Projects.List = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -2rem;
  margin-right: -2rem;
  padding: 10rem 0 2rem 0;
`

Projects.Item = styled.a`
  width: 50%;
  padding: 0 2rem;
  margin-bottom: 4rem;
  transition: opacity .2s;
  cursor: pointer;

  &:hover {
    opacity: .8;
  }
`

Projects.Item.Thumb = styled.img`
  display: block;
  width: 100%;
  height: auto;
`

Projects.Item.Heading = styled.h3`
  font-family: 'Graphik Medium';
  font-size: 2.1rem;
  margin: 2rem 0;
`
