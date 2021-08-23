import styled from "@emotion/styled";
import {magentaLighter} from "../theme/colors"

export const defaultFont = "14px";
export const smallFont = "10px";

const codeFont = "12px 'Space Mono', monospace;"

export const CodeSpan = styled.span`
    font-family: SFMono-Regular,Consolas,Roboto Mono,Droid Sans Mono,Liberation Mono,Menlo,Courier,monospace;
    font-size: 14px;
    background-color: ${magentaLighter};
    padding: .2rem;
    font-weight: bold;
`