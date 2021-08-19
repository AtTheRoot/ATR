import React from "react"
import styled from "@emotion/styled";

import {borderColor, greyDark, magenta} from "../theme/colors"
import {contentPaddingSmall, dropShadow, ThreeFourthDiv, OneFourthDiv, ObjectFooter, Content, borderRadius} from "../theme/page";
import {defaultFont, smallFont} from "../theme/font"
import {library} from "@fortawesome/fontawesome-svg-core";
import {faEye, faComments, faThumbsUp, faDownload, faUserAstronaut, faStar } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";



const FeedRowWrapper = styled.div`
    padding-top: 1em;
    min-height: 2em;
    border-top: 3px solid ${borderColor} !important;
    background-color: white;
    margin-bottom: 1em;
    box-shadow: ${dropShadow};
`

const FeedContentWrapper = styled.div`
    display: flex;
    padding: ${contentPaddingSmall}
`

const MainRowContent = styled(ThreeFourthDiv)``

const IconsRowContent = styled(OneFourthDiv)`
    margin-left: auto;
    text-align: right;
    display: flex;
    justify-content: flex-end;
`

const RowTitle = styled.h3`
    margin-bottom: 0em !important;
`
const RowContent = styled.div``

const FeedFooter = styled(ObjectFooter)`
    display: flex;
`

export const FeedBadgeWrapper = styled(ObjectFooter)`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    background-color: transparent !important;
`

const FooterItems = styled.div`
`

const FooterIcons = styled(FooterItems)`
    margin: 0 .55em;
`

export const Badge = styled(FooterItems)`
    background-color: transparent;
    padding: .25em .75em .15em .55em;
    margin-right: .25em;
    margin-bottom: .25em;
    border-radius: ${borderRadius};
    border: 1px ${greyDark} solid;
    font-size: ${smallFont};
    color: ${greyDark};
    text-transform: uppercase;
`

const UserCircle = styled.div`
    height: 2em;
    width: 2em;
    border-radius: 50%;
    border: 1px solid black;
    text-align:center;
    padding-top: .5em;
    margin-right: -.5em;
    background-color: white;
`

const Button = styled.button`
    border-radius: ${borderRadius};
    padding: .75em .45em;
    align-items: center;
    justify-content: center;
    margin: 0rem 1rem;
    background-color: transparent;
`

export const GreyButton = styled(Button)`
    color: ${greyDark};
    border: 2px solid ${greyDark};
`

export const MagentaButton = styled(Button)`
    color: ${magenta};
    border: 2px solid ${magenta};
`

const PullRightFooter = styled.div`
    margin-left: auto;
`

const Checkbox = styled.input`
    margin-left: -5em;
    transform: scale(1.5);
    margin-right: .5em;
`

const FeedRow = () => (
    <FeedRowWrapper>
        <Content>
        <Checkbox type={"checkbox"}/>
        <FontAwesomeIcon icon={faStar} size="md" alt="views"/>
            <RowTitle>Title</RowTitle>
            <span>{new Date().toDateString()}</span>
            <FeedContentWrapper>
                <MainRowContent>
                <RowContent>
                    content content content
                    content content content
                    content content content
                    content content content
                    content content content
                    content content content
                    content content content
                    content content content
                    content content content
                    content content content
                    content content content
                    content content content
                    content content content
                    content content content
                </RowContent>

                </MainRowContent>
                <IconsRowContent>
                        <UserCircle>
                               <FontAwesomeIcon icon={faUserAstronaut} size="md" alt="views"/>
                        </UserCircle>
                        <UserCircle>
                               <FontAwesomeIcon icon={faUserAstronaut} size="md" alt="views"/>
                        </UserCircle>
                        <UserCircle>
                               <FontAwesomeIcon icon={faUserAstronaut} size="md" alt="views"/>
                        </UserCircle>
                        <UserCircle>
                               <FontAwesomeIcon icon={faUserAstronaut} size="md" alt="views"/>
                        </UserCircle>
                </IconsRowContent>
            </FeedContentWrapper>
        </Content>
        <FeedBadgeWrapper>
            <Badge>(145) tag</Badge>
            <Badge>(14) asdfasd</Badge>
            <Badge>(4) sdfsdf</Badge>
            <Badge>(1) sdgsdf</Badge>
            <Badge>(1) asdfasd  asdfasdf</Badge>
            <Badge>(1) tag</Badge>
            <Badge>(1) tag</Badge>
            <Badge>(1) tag</Badge>
            <Badge>(1) tag</Badge>
            <Badge>(1) tag</Badge>
            <Badge>(1) tag</Badge>
        </FeedBadgeWrapper>
        <FeedFooter>
            <FooterIcons>
                122 <FontAwesomeIcon icon={faEye} size="md" alt="views"/>
            </FooterIcons>
            <FooterIcons>
                7 <FontAwesomeIcon icon={faComments} size="md" alt="views"/>
            </FooterIcons>
            <FooterIcons>
                1,123 <FontAwesomeIcon icon={faThumbsUp} size="md" alt="views"/>
            </FooterIcons>
            <FooterIcons>
                1,123 <FontAwesomeIcon icon={faDownload} size="md" alt="views"/>
            </FooterIcons>
            <PullRightFooter>
                <Button>View Full Thread</Button>
            </PullRightFooter>
        </FeedFooter>
    </FeedRowWrapper>
)

export default FeedRow