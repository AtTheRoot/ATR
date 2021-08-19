import React from "react"
import styled from "@emotion/styled"

import {MagentaButton, GreyButton} from "./FeedRow";

const RightNavWrapper = styled.div`
    margin-left: auto;
    padding: auto;
`

const RightButton = styled(GreyButton)`
    height: 100%;
    padding: 0 2rem;
`


const RightNav = () => {
    return (
        <RightNavWrapper>
            <RightButton>Button</RightButton>
            <RightButton>Button</RightButton>
            <RightButton>Button</RightButton>
        </RightNavWrapper>
    )
}

export default RightNav