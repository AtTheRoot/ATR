import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import HighlightHeader from "./MarkedHeader";

const Container = styled.div`
  text-align: center;
`

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 78vh;
`

const Description = styled.p`
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1.4rem;
`

const NameHeader = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 0;
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

const content = `I'm baby messenger bag bushwick cornhole, unicorn selfies master cleanse gluten-free hammock retro fingerstache neutra celiac crucifix leggings. Prism schlitz pok pok disrupt sustainable tote bag 90's. Bespoke before they sold out pitchfork listicle taxidermy 8-bit banjo mustache unicorn activated charcoal actually. Shabby chic distillery marfa, deep v master cleanse migas messenger bag blue bottle prism fixie authentic yr coloring book. Adaptogen tumeric mixtape helvetica portland, af health goth etsy iPhone flannel waistcoat. XOXO mumblecore paleo, palo santo poke vaporware vinyl cornhole raw denim asymmetrical literally hoodie street art.

Edison bulb synth meggings williamsburg man bun leggings. Taxidermy chia viral marfa drinking vinegar seitan hot chicken everyday carry PBR&B yuccie paleo truffaut pinterest. Sustainable chillwave humblebrag kitsch, taxidermy four dollar toast banh mi woke letterpress hella kogi single-origin coffee. DIY banh mi hammock umami, asymmetrical la croix fingerstache portland beard neutra vegan.

Succulents taiyaki tattooed man braid vegan synth la croix, gastropub aesthetic venmo jean shorts. Hell of shaman synth DIY air plant mixtape irony. Slow-carb art party microdosing disrupt. Vape knausgaard photo booth 8-bit ramps, af bicycle rights hashtag hot chicken poke chartreuse deep v letterpress skateboard.

Cray pour-over roof party chillwave vape +1 deep v man braid franzen stumptown PBR&B vinyl freegan succulents. Af listicle man bun hella microdosing raclette church-key health goth flannel. Cardigan affogato pug, tbh offal hexagon kombucha chicharrones four loko you probably haven't heard of them blue bottle disrupt vinyl yr adaptogen. Four loko vaporware mixtape gentrify air plant vinyl tacos tousled thundercats direct trade shoreditch keytar vape pickled. Twee schlitz put a bird on it four dollar toast pop-up normcore.

Jean shorts lyft etsy pug. Live-edge tote bag meggings plaid prism gentrify coloring book. Kogi street art beard, sriracha YOLO umami twee. Aesthetic heirloom 8-bit viral salvia, fam meh bicycle rights wolf cliche single-origin coffee stumptown letterpress gochujang chillwave.

Dummy text? More like dummy thicc text, amirite?`

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