import React from "react"
import styled from "@emotion/styled"

import {MagentaButton, GreyButton, GreyLightButton} from "./FeedRow";

const RightNavWrapper = styled.div`
    margin-left: auto;
    padding: auto;
`

const RightButton = styled(GreyButton)`
    height: 100%;
    padding: 0 2rem;
`

const RightLightButton = styled(GreyLightButton)`
    height: 100%;
    padding: 0 2rem;
`

const RightNav = () => {
    return (
        <RightNavWrapper>
            <RightButton>Submit A Topic</RightButton>
            <RightLightButton>Save Search Criteria</RightLightButton>
        </RightNavWrapper>
    )
}

export default RightNav