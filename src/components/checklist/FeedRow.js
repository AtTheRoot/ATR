import React from "react"
import styled from "@emotion/styled";

import {borderColor} from "../theme/colors"
import {contentPaddingSmall, ThreeFourthDiv, OneFourthDiv, ObjectFooter, Content} from "../theme/page"

import {library} from "@fortawesome/fontawesome-svg-core";
import {faEye, faComments, faThumbsUp, faDownload, faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
library.add(faEye, faComments, faThumbsUp, faDownload, faUserAstronaut );


const FeedRowWrapper = styled.div`
    padding-top: 1em;
    min-height: 2em;
    border: 1px solid ${borderColor} !important;
    background-color: white;
    margin-bottom: 1em;
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
    justify-content: space-evenly;
`

const FooterItems = styled.div`

`

const UserCircle = styled.div`
    height: 2em;
    width: 2em;
    border-radius: 50%;
    border: 1px solid black;
    text-align:center;
    padding-top: .5em;
    margin-right: -.5em;
`

const FeedRow = () => (
    <FeedRowWrapper>
        <Content>
            <RowTitle>Title</RowTitle>
            <span>Date</span>
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
        <FeedFooter>
            <FooterItems>
                122 <FontAwesomeIcon icon={faEye} size="md" alt="views"/>
            </FooterItems>
            <FooterItems>
                7 <FontAwesomeIcon icon={faComments} size="md" alt="views"/>
            </FooterItems>
            <FooterItems>
                1,123 <FontAwesomeIcon icon={faThumbsUp} size="md" alt="views"/>
            </FooterItems>
            <FooterItems>
                1,123 <FontAwesomeIcon icon={faDownload} size="md" alt="views"/>
            </FooterItems>
        </FeedFooter>
        <FeedFooter>
            <FooterItems>tag</FooterItems>
            <FooterItems>tag</FooterItems>
            <FooterItems>tag</FooterItems>
            <FooterItems>tag</FooterItems>
            <FooterItems>tag</FooterItems>
            <FooterItems>tag</FooterItems>
            <FooterItems>tag</FooterItems>
            <FooterItems>tag</FooterItems>
            <FooterItems>tag</FooterItems>
            <FooterItems>tag</FooterItems>
            <FooterItems>tag</FooterItems>
            <FooterItems>tag</FooterItems>
            <FooterItems>tag</FooterItems>
            <FooterItems>tag</FooterItems>
            <FooterItems>tag</FooterItems>
        </FeedFooter>
    </FeedRowWrapper>
)

export default FeedRow