/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

import Header from "./theme/header"

import "./layout.css"

const Content = styled.div`
  margin: 0 auto;
  max-width: 80vw;
  padding: 0 1.0875rem 1rem;
  padding-top: 0;
`

const GatsbyLink = styled.a`
  margin-left: 5px;
`

const Footer = styled.footer`
  display: flex;
  justify-content: center;
`

const ForumLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query ForumLayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />

            <Content>
              <main>{children}</main>
              <Footer>
                <p>
                © {new Date().getFullYear()}, Built by
                {` `}
                </p>
                <GatsbyLink href="https://VE4TM.dev">VE4TM.dev - Volunteer Engineers 4 The Movement</GatsbyLink>
              </Footer>
            </Content>

      </>
    )}
  />
)

ForumLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ForumLayout