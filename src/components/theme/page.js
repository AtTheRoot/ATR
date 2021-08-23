import styled from "@emotion/styled";
import {greyLight} from "./colors";

export const borderRadius = "4px";

export const contentPadding = '1rem 1.0875rem';
export const contentPaddingSmall = '.5rem .65rem';
export const contentPaddingTitleBottom = "2rem";

export const marginTop = "2rem";

export const FullViewWidthDiv = styled.div`
`;

export const FullWidthDiv = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
`;

export const PageContainer = styled.div`
    min-height: 4em;
    margin: 1em 0.5em 1em 0.5em;
    padding: 1em 0;
    line-height: 1em;
    cursor: pointer;
    border: none;
	display: flex;
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: 80vw;
  padding: 0 1.0875rem 1rem;
  padding-top: 0;
`;

export const HalfDiv = styled.div`
    width: 50%;
    padding: ${contentPaddingSmall};
`;

export const ThreeFourthDiv = styled.div`
    width: 75%;
    padding: ${contentPaddingSmall};
`;

export const OneFourthDiv = styled.aside`
    width: 25%;
    padding: ${contentPaddingSmall};
`;

export const OneThirdDiv = styled.aside`
    width: 33%;
    padding: ${contentPaddingSmall};
`;

export const ObjectFooter = styled.div`
    width: 100%;
    padding: ${contentPaddingSmall};
`;

export const dropShadow = "rgba(46, 61, 73, 0.15) 8px 10px 20px 0px";