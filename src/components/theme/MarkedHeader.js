import styled from "@emotion/styled";
import {magenta, magentaMed, magentaLight, magentaLighter} from "./colors"
import {Link} from "gatsby";

export const HighlightHeader = (styled.h1`
  display: inline;
  border-radius: 1em 0 1em 0;
  background-image: linear-gradient(
    -100deg,
    rgba(255, 250, 150, 0.15),
    rgba(255, 250, 150, 0.8) 100%,
    rgba(255, 250, 150, 0.25)
  );
`)

export const OrangeHighlightHeader = (styled.h1`
  display: inline;
  border-radius: 1em 0 1em 0;
  background-image: linear-gradient(
    -100deg,
    rgba(255, 146, 0, 0.15),
    rgba(255, 167, 42, 0.7) 100%,
    rgba(255, 181, 60, 0.8) 100%,
    rgba(255, 224, 160, 0.25)
  );
`)

export const SecondaryHighlightHeader = (styled.h1`
  display: inline;
  border-radius: 1em 0 1em 0;
  background-image: linear-gradient(
    -100deg,
    ${magentaLighter},
    ${magentaLight},
    ${magentaMed}
  );
`)

export const SecondaryHighlightHeader3 = (styled.h3`
  display: inline;
  border-radius: 1em 0 1em 0;
  background-image: linear-gradient(
    -100deg,
    ${magentaLighter},
    ${magentaLight},
    ${magentaMed}
  );
`)



export const NavLink = styled(Link)`
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


export const SecondaryHighlightLink = styled(NavLink)`
  margin-left: 15px;
  display: inline;
  border-radius: 1em 0 1em 0;
  background-image: linear-gradient(
    -100deg,
    ${magentaLighter},
    ${magentaLight},
    ${magentaMed}
  );
`
