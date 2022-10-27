import React from "react"
import styled from "@emotion/styled"

import {borderColor} from "../theme/colors"
import {greyLight, greyDark, magentaLight, magentaLighter} from "../theme/colors"
import {contentPadding, contentPaddingSmall, dropShadow, contentPaddingTitleBottom, ObjectFooter} from "../theme/page"
import {defaultFont} from "../theme/font"
import {FeedBadgeWrapper, Badge, SmallMagentaButton, MagentaButton} from "../checklist/FeedRow";
import {SmallColorText} from "../checklist/MainFeed"
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
    margin: 1.2em;
    cursor: pointer;
    color: ${greyDark} !important;
    border-top: 3px solid ${borderColor} !important;
    box-shadow: ${dropShadow};
    flex: 1 1 220px;
    font-size: ${defaultFont};
    background-color: white;
`

const CardTitle = styled.h4`
    padding: ${contentPadding};
    margin-bottom: 0rem;
    padding-bottom: 0rem;
`

const CardBody = styled.p`
    padding: ${contentPadding};
    overflow-y: auto;
    max-height: 9rem;
    padding-top: 0rem;
`

const CardFooter = styled(ObjectFooter)`
    background-color: ${magentaLighter};
    padding: 0rem;
    margin-left: auto;
`

export const CardBadgeWrapper = styled(ObjectFooter)`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
`

export const CardDate = styled.p`
    font-size: ${defaultFont};
    padding: ${contentPadding};
    margin-bottom: 0rem;
    padding-bottom: 0rem;
`

const CardIcon = styled.div`
    margin: -40px auto auto -20px;
    text-align: center;
    border: 2px ${magentaLighter} solid;
    border-radius: 50%;
    position: relative;
    padding: 1.5rem;
    width: 3.125rem;
    height: 3.125rem;
    font-size: 50px;
    font-weight: bold;
    white-space: nowrap;
    ::after{
        border: 1px ${magentaLighter} solid;
        transform: rotate(5deg);
        content: "";
        top: -2px;
        left: -5px;
    }
    ::before{
    content: "00";
    font-size: 40px;
    }
`

const Card = ({data, incr}) => {
    const tagLimit = 5;
    const abstractLimit = 400;
    return (
        <CardContainer>
            <CardIcon>{incr}</CardIcon>
            <CardTitle>{data.title}</CardTitle>
            <CardDate>{data.date}</CardDate>
            <FeedBadgeWrapper>
                {data.tags.slice(0,tagLimit).map((item, index) => (<Badge key={index}>{item}</Badge>))}
            {data.tags.length > tagLimit && <SmallColorText>... {data.tags.length - tagLimit} more tag(s)</SmallColorText>}
        </FeedBadgeWrapper>
            <hr/>
            <CardBody>
                {data.abstractShort.substring(0,abstractLimit)} {data.abstractShort.length > abstractLimit && <span>...</span>}
            </CardBody>
            <CardFooter>
            <CardBadgeWrapper>
                <MagentaButton>Read More ></MagentaButton>
            </CardBadgeWrapper>
            </CardFooter>
        </CardContainer>
    )
}

export default Card