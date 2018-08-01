import styled, { injectGlobal } from 'styled-components'

import fontGraphikRegularWebEot from 'resources/fonts/Graphik-Regular-Web.eot'
import fontGraphikRegularWebTtf from 'resources/fonts/Graphik-Regular-Web.ttf'
import fontGraphikRegularWebWoff from 'resources/fonts/Graphik-Regular-Web.woff'
import fontGraphikRegularWebWoff2 from 'resources/fonts/Graphik-Regular-Web.woff2'

import fontGraphikMediumWebEot from 'resources/fonts/Graphik-Medium-Web.eot'
import fontGraphikMediumWebTtf from 'resources/fonts/Graphik-Medium-Web.ttf'
import fontGraphikMediumWebWoff from 'resources/fonts/Graphik-Medium-Web.woff'
import fontGraphikMediumWebWoff2 from 'resources/fonts/Graphik-Medium-Web.woff2'

import fontGraphikBoldWebEot from 'resources/fonts/Graphik-Bold-Web.eot'
import fontGraphikBoldWebTtf from 'resources/fonts/Graphik-Bold-Web.ttf'
import fontGraphikBoldWebWoff from 'resources/fonts/Graphik-Bold-Web.woff'
import fontGraphikBoldWebWoff2 from 'resources/fonts/Graphik-Bold-Web.woff2'

const colors = {
  white: '#ffffff',
  black: '#000000',
  indigo: '#5528FF',
  dark: '#121212'
}

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
    font-weight: 400;
    font-size: 1.4rem;

    overflow-x: hidden;
  }

  .app {
    
  }
`

export const Container = styled.div`
  width: 100%;
  max-width: 107rem;
  padding: 0 1.5rem;
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

App.Section = styled.section`

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
  color: #000;
  text-decoration: none;
  cursor: pointer;
  transition: color .2s;

  &:hover {
    color: ${colors.indigo};
  }
`

export const Home = styled.div`
`

Home.Inner = styled.div`
  width: 60%;
`

Home.Heading = styled.h1`
  margin: 4rem 0 6rem 0;
  font-family: 'Graphik Bold';
  font-size: 5rem;
  line-height: 6rem;
`

Home.Description = styled.div`
`

Home.Description.Paragraph = styled.p`
  margin: 0 0 3rem 0;
  font-size: 2.4rem;
  font-weight: 400;
`

export const Staff = styled.div`
  padding: 5rem 0;
`

Staff.List = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -1.5rem;
  margin-right: -1.5rem;
`

Staff.Item = styled.div`
  width: 33.333332%;
  padding: 0 1.5rem;
  margin-bottom: 50px;
`

Staff.Card = styled.div`
  height: 100%;
  padding: 3rem;
  position: relative;
  border-radius: .5rem;
  background: #fff;
  box-shadow: 0px 1rem 4rem rgba(98, 122, 129, 0.13);

  display: flex;
  align-items: center;
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

  ${props => props.source && `
    background-image: url(${props.source});
  `}
`

Staff.Card.Info = styled.div``

Staff.Card.Info.Name = styled.div`
  font-family: 'Graphik Medium';
  font-weight: 500;
  font-size: 1.8rem;
`
Staff.Card.Info.Position = styled.div`
  font-weight: 400;
  font-size: 1.6rem;
  color: #777;
`

export const Footer = styled.footer`
  position: relative;
  color: ${colors.white};
  background: ${colors.dark};
`

Footer.Inner = styled.div`
  padding: 9rem 0 0 0;
`

Footer.Heading = styled.h1`
  margin: 6rem 0 4rem 0;
  font-family: 'Graphik Bold';
  font-size: 5rem;
  line-height: 6rem;
`

Footer.List = styled.div`

`

Footer.List.Item = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  font-size: 3.6rem;

  &:last-child {
    margin-bottom: 0;
  }
`

Footer.List.Link = styled.a`
  font-size: 3.6rem;
  color: ${colors.white};
  text-decoration: none;
  transition: color .2s;

  &:hover {
    color: ${colors.indigo};
  }
`

Footer.Contacts = styled.div`
  margin-top: 9rem;
  padding: 4rem 0;
  border-top: .2rem solid #545454;
  color: #545454;
  font-size: 2.1rem;
`
