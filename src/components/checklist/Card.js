import React from "react"
import styled from "@emotion/styled"

import {borderColor} from "../theme/colors"
import {greyLight, greyDark} from "../theme/colors"
import {contentPadding, contentPaddingSmall, contentPaddingTitleBottom, ObjectFooter} from "../theme/page"
import {SecondaryHighlightHeader} from "../theme/MarkedHeader";

const boxShadow = (color) => {
	return `0.2em 0.2em 1px ${color} !important`
}

const CardContainer = styled.div`
    min-height: 4em;
    margin: 0.5em;
    background-color: white;
    cursor: pointer;
    color: ${greyDark} !important;
    border: 1px solid ${borderColor} !important;
    width: 20rem;
`

const CardTitle = styled.h2`
    padding: ${contentPadding};
`

const CardBody = styled.p`
    padding: ${contentPadding};
    overflow-y: auto;
    max-height: 10rem;
`

const CardFooter = styled(ObjectFooter)`
`

const CardDate = styled.p``

const Card = () => {
    return (
        <CardContainer>
            <CardTitle>Card Title</CardTitle>
            <CardDate>{Date.now().toString()}</CardDate>
            <CardBody>
                Card Body Text Text Text Text Lorem Ipsum Card Body Card Body Text Text Text Text Lorem Ipsum Card Body Card Body Text Text Text Text Lorem Ipsum Card Body Text Text Text Text Lorem IpsumCard Body Text Text Text Text Lorem IpsumCard Body Text Text Text Text Lorem IpsumCard Body Text Text Text Text Lorem Ipsum
            </CardBody>
            <CardFooter>
                Card Footer
            </CardFooter>
        </CardContainer>
    )
}

export default Card