import styled from "@emotion/styled";
import { css } from "@emotion/react";
import {greyLight} from "./colors"

export const contentPadding = '1rem 1.0875rem';
export const contentPaddingSmall = '.5rem .65rem';
export const contentPaddingTitleBottom = "2rem";

export const marginTop = "2rem";

export const FullWidthDiv = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
`

export const PageContainer = styled.div`
    min-height: 4em;
    margin: 1em 0.5em 1em 0.5em;
    padding: 1em 0;
    line-height: 1em;
    cursor: pointer;
    border: none;
	background-color: #f3f3f3;
	display: flex;
`

export const Content = styled.div`
  margin: 0 auto;
  max-width: 80vw;
  padding: 0 1.0875rem 1rem;
  padding-top: 0;
`

export const ThreeFourthDiv = styled.div`
    width: 75%;
`

export const OneFourthDiv = styled.aside`
    width: 25%;
`

export const HalfDiv = styled.div`
    width: 50%;
`

export const ObjectFooter = styled.div`
    width: 100%;
    background: ${greyLight};
    padding ${contentPaddingSmall};
`