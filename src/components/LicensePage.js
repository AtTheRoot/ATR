import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faCoffee } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faExternalLinkAlt, faCoffee)

const Container = styled.div`
  text-align: center;
`

const NameHeader = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 0;
`

const RowRight = styled.span`
    float: right;
`

const Icon = styled.span`
    padding-left: .5rem;
`

// STYLE THE TAGS INSIDE THE MARKDOWN HERE
const MarkdownContent = styled.div`
  a {
    text-decoration: none;
    position: relative;

    background-image: linear-gradient(
      rgba(255, 250, 150, 0.8),
      rgba(255, 250, 150, 0.8)
    );
    background-repeat: no-repeat;
    background-size: 100% 0.2em;
    background-position: 0 88%;
    transition: background-size 0.25s ease-in;
    &:hover {
      background-size: 100% 88%;
    }
  }

  a > code:hover {
    text-decoration: underline;
  }
`

const LicensePage = () => (
  <StaticQuery
    query={graphql`
      query LandingSiteLicenseQuery {
        markdownRemark(frontmatter: {path: {eq: "/License"}}) {
            html
            frontmatter {
            path
            title
            showDate
            }
        }
      }
    `}
    render={data => (
        <Container>

            <pre>
                <RowRight>
                    <Icon>
                        <a href="#">
                            <FontAwesomeIcon icon={faExternalLinkAlt} size="lg" alt="open license - markdown"/>
                        </a>
                    </Icon>
                    <Icon>
                        <a href="https://github.com/dawnwages/ATR/blob/master/src/content/ATRlicense.md" target="_blank">
                            <FontAwesomeIcon icon={["fab", "github"]} size="lg" alt="open license - github"/>
                        </a>
                    </Icon>
                </RowRight>
                <MarkdownContent dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
            </pre>
        </Container>
    )}
  />
)

NameHeader.propTypes = {
  siteTitle: PropTypes.string,
  subtitle: PropTypes.string,
}

NameHeader.defaultProps = {
  siteTitle: ``,
  subtitle: ``,
}

export default LicensePage