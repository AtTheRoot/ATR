import React from "react"

import { OneFourthDiv, Content, ObjectFooter, dropShadow } from "../theme/page";
import {SecondaryHighlightHeader3} from "../theme/MarkedHeader";
import styled from "@emotion/styled";
import {borderColor} from "../theme/colors";
import {Badge} from "./FeedRow"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faThumbsUp, faComments, faStar} from "@fortawesome/free-solid-svg-icons";
import {library} from "@fortawesome/fontawesome-svg-core";
library.add(faThumbsUp, faComments, faStar);

const AsideContentWrapper = styled.div`
    padding-top: 1em;
    min-height: 2em;
    border-top: 3px solid ${borderColor} !important;
    background-color: white;
    margin-bottom: 1em;
    box-shadow: ${dropShadow};
`

const TopBadgesList = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: .5em;
`

const RightAside = () => (
        <OneFourthDiv>
            <Content>
               <SecondaryHighlightHeader3> Aside </SecondaryHighlightHeader3>
                <hr/>
                <AsideContentWrapper>
                    <TopBadgesList>
                    <Badge>(122) test</Badge>
                    <Badge>(104) test</Badge>
                    <Badge>(52) test</Badge>
                    <Badge>(44) test</Badge>
                    <Badge>(32) test</Badge>
                    <Badge>(10) test</Badge>
                    <Badge>(5) test</Badge>
                    <Badge>(5) test</Badge>
                    <Badge>(1) test</Badge>
                    </TopBadgesList>
                    <ObjectFooter>
                        Recent Topics
                        <hr/>
                        <ul>
                            <li>Topic
                                23 <FontAwesomeIcon icon={faThumbsUp} size="md" alt="views"/>
                                5 <FontAwesomeIcon icon={faComments} size="md" alt="views"/>
                                7 <FontAwesomeIcon icon={faStar} size="md" alt="views"/>
                            </li>
                            <li>Topic
                                2 <FontAwesomeIcon icon={faThumbsUp} size="md" alt="views"/>
                                15 <FontAwesomeIcon icon={faComments} size="md" alt="views"/>
                                7 <FontAwesomeIcon icon={faStar} size="md" alt="views"/>
                            </li>
                            <li>Topic
                                3 <FontAwesomeIcon icon={faThumbsUp} size="md" alt="views"/>
                                1 <FontAwesomeIcon icon={faComments} size="md" alt="views"/>
                                7 <FontAwesomeIcon icon={faStar} size="md" alt="views"/>
                            </li>
                            <li>Topic
                                1 <FontAwesomeIcon icon={faThumbsUp} size="md" alt="views"/>
                                4 <FontAwesomeIcon icon={faComments} size="md" alt="views"/>
                                7 <FontAwesomeIcon icon={faStar} size="md" alt="views"/>
                            </li>
                        </ul>
                    </ObjectFooter>
                </AsideContentWrapper>
            </Content>
        </OneFourthDiv>
)

export default RightAside