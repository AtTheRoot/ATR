import { Link } from "gatsby"
import {NavLink, SecondaryHighlightLink} from "./MarkedHeader";
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import React from "react"

const Content = styled.div`
  max-width: 860px;
  padding: 1rem 1.0875rem;
  font-size: 1.2rem;
`

const GitHubLink = styled.a`
  color: black;
  margin-left: 15px;
  text-decoration: none;
  display: inline-block;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }

  :hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`

const NewLink = styled(NavLink)`
  ::after {
    content: attr(data-descr);
    position: absolute;
    left: 0;
    top: -20px;
    background-color: red;
    z-index: 1;
    font-size: .75rem;
    color: red;
  }
`

const HighlightLink = styled(NavLink)`
  margin-left: 0;
  display: inline;
  border-radius: 1em 0 1em 0;
  background-image: linear-gradient(
    -100deg,
    rgba(255, 250, 150, 0.15),
    rgba(255, 250, 150, 0.8) 100%,
    rgba(255, 250, 150, 0.25)
  );
`

const OrangeHighlightLink = styled(NavLink)`
  margin-left: 15px;
  display: inline;
  border-radius: 1em 0 1em 0;
  background-image: linear-gradient(
    -100deg,
    rgba(255, 146, 0, 0.15),
    rgba(255, 167, 42, 0.7) 100%,
    rgba(255, 181, 60, 0.8) 100%,
    rgba(255, 224, 160, 0.25)
  );
`


const SiteHeader = styled.header`
  background: transparent;
  display: flex;
  align-content: center;
  justify-content: center;
`

const Header = () => (
  <SiteHeader>
    <Content>
      <p>
        <HighlightLink to="/">License</HighlightLink>
        <SecondaryHighlightLink to="/checklist">Check List</SecondaryHighlightLink>
        <NavLink to="/at-the-root">FAQ</NavLink>
        <NewLink data-descr="New Posts" to="/blog">Updates</NewLink>
        <NavLink to="/code-of-conduct">Code of Conduct</NavLink>
        <NavLink to="/adopters"><b>Join The Movement!</b></NavLink>
      </p>
    </Content>
  </SiteHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
