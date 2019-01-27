import { Link, StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import logo from '../images/zeeshaan-logo.png'
import styled from 'styled-components'
import Img from 'gatsby-image'

const HeaderWrapper = styled.div`
  background: rebeccapurple;
  marginBottom: 1.45rem;
  overflow: hidden;
  position: relative;
  height: 70vh;
  h1 {
    img {
      height: 80px;
    }
  }
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
`;

const MainNav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    li {
      margin-left: 10px;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      a {
        text-decoration: none;
        color: #fff;
        &:hover {
          border-bottom: 3px solid rebeccapurple;
        }
      }
    }
  }
`;

class Header extends Component {

  render() {
    return (
      <StaticQuery
        query={graphql`
          query HeaderQuery {
            file(relativePath: {
              regex: "/background-cover.jpg/"
            }) {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => (
          <HeaderWrapper>
          <HeaderContainer>
            <h1 style={{ margin: 0 }}>
              <Link
                to="/"
                style={{
                  color: `white`,
                  textDecoration: `none`,
                }}
              >
                <img src={logo} alt='mushroomdev-logo' />
              </Link>
            </h1>
            <MainNav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </MainNav>
          </HeaderContainer>
          <Img
            style = {{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '100%',
              height: '100%',
              opacity: 0.4
            }}
            fluid={data.file.childImageSharp.fluid} />
        </HeaderWrapper>
      )} />
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
