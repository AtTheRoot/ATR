import React from "react"
import styled from "@emotion/styled"

import {borderColor} from "../theme/colors"
import {greyLight, greyDark, magentaLight, magentaLighter} from "../theme/colors"
import {contentPadding, contentPaddingSmall, dropShadow, contentPaddingTitleBottom, ObjectFooter} from "../theme/page"
import {defaultFont} from "../theme/font"
import {FeedBadgeWrapper, Badge} from "../checklist/FeedRow"
import {SecondaryHighlightHeader} from "../theme/MarkedHeader";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faBookReader, faStar} from "@fortawesome/free-solid-svg-icons";
library.add(faBookReader);

const boxShadow = (color) => {
	return `0.2em 0.2em 1px ${color} !important`
}

const CardContainer = styled.div`
    min-height: 2em;
    margin: 1em 2em;
    cursor: pointer;
    color: ${greyDark} !important;
    border-top: 3px solid ${borderColor} !important;
    box-shadow: ${dropShadow};
    flex: 1 1 220px;
    font-size: ${defaultFont};
`

const CardTitle = styled.h4`
    padding: ${contentPadding};
    margin-bottom: 0rem;
    padding-bottom: 0rem;
`

const CardBody = styled.p`
    padding: ${contentPadding};
    overflow-y: auto;
    max-height: 5rem;
    padding-top: 0rem;
`

const CardFooter = styled(ObjectFooter)`
    background-color: ${magentaLighter}
`

export const CardBadgeWrapper = styled(ObjectFooter)`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
`

const CardDate = styled.p`
    font-size: ${defaultFont};
    padding: ${contentPadding};
    margin-bottom: 0rem;
    padding-bottom: 0rem;
`

const CardIcon = styled.div`
    margin: -40px auto auto -40px;
    text-align: center;
    border: 2px ${magentaLighter} solid;
    border-radius: 50%;
    position: relative;
    padding: 1.5rem;
    width: 4.125rem;
    height: 4.125rem;
    font-size: 40px;
    font-weight: bold;
    white-space: nowrap;
    ::after{
        border: 1px ${magentaLighter} solid;
        transform: rotate(5deg);
        content: "";
        top: -5px;
        left: -5px;
    }
    ::before{
    content: "00";
    font-size: 40px;
    }
`

const Card = () => {
    return (
        <CardContainer>
            <CardIcon>1</CardIcon>
            <CardTitle>Card Title</CardTitle>
            <CardDate>{new Date().toDateString()}</CardDate>
            <hr/>
            <CardBody>
                Card Body Text Text Text Text Lorem Ipsum Card Body Card Body Text Text Text Text Lorem Ipsum Card Body Card Body Text Text Text Text Lorem Ipsum Card Body Text Text Text Text Lorem IpsumCard Body Text Text Text Text Lorem IpsumCard Body Text Text Text Text Lorem IpsumCard Body Text Text Text Text Lorem Ipsum
            </CardBody>
            <CardFooter>
            <CardBadgeWrapper>
                <Badge>(145) tag</Badge>
                <Badge>(14) asdfasd</Badge>
                ... 13 more tags
            </CardBadgeWrapper>
            </CardFooter>
        </CardContainer>
    )
}

export default Card