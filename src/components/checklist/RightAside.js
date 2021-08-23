import React from "react"
import styled from "@emotion/styled";

import { OneFourthDiv, OneThirdDiv, HalfDiv, Content, ObjectFooter, dropShadow } from "../theme/page";
import {SecondaryHighlightHeader3} from "../theme/MarkedHeader";
import {borderColor, magentaLighter, grey, greyDark} from "../theme/colors";
import {Badge} from "./FeedRow";
import {CodeSpan} from "../theme/font";

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

const FilterDiv = styled.div`
    background-color: ${magentaLighter};
    display: flex;
    padding-top: 1em;
    ::after{
      content: "";
      width: 0;
      height: 0;
      position: relative;
      top: -55px;
      left: -120px;
      border-left: 20px solid transparent;
      border-right: 20px solid transparent;
      border-bottom: 30px solid ${magentaLighter};
    }
`

const FilterWrapper = styled(OneThirdDiv)`
    margin-left: auto;
`

const SearchHelp = styled(HalfDiv)`
    ul {
        list-style-type: none;
        margin-left: .45rem;
        font-size: 14px;
    }
`

const RightAside = () => (
        <>
        <FilterWrapper>
            <FilterDiv>
                    <SearchHelp>
                        <ul>
                        <li><CodeSpan>[tag]</CodeSpan> search within a tag</li>
                        <li><CodeSpan>user:1234</CodeSpan> search by author</li>
                        <li><CodeSpan>answers:0</CodeSpan> unanswered questions</li>
                        <li><CodeSpan>score:3</CodeSpan> posts with a 3+ score</li>
                        </ul>
                    </SearchHelp>
                    <SearchHelp>
                        <ul>
                            <li><CodeSpan>"words here"</CodeSpan> exact phrase</li>
                            <li><CodeSpan>isaccepted:yes</CodeSpan> search within status</li>
                            <li><CodeSpan>is:question</CodeSpan> type of post</li>
                        </ul>
                    </SearchHelp>
            </FilterDiv>
        </FilterWrapper>
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
                                23 <FontAwesomeIcon icon={faThumbsUp} size="1x" alt="views"/>
                                5 <FontAwesomeIcon icon={faComments} size="1x" alt="views"/>
                                7 <FontAwesomeIcon icon={faStar} size="1x" alt="views"/>
                            </li>
                            <li>Topic
                                2 <FontAwesomeIcon icon={faThumbsUp} size="1x" alt="views"/>
                                15 <FontAwesomeIcon icon={faComments} size="1x" alt="views"/>
                                7 <FontAwesomeIcon icon={faStar} size="1x" alt="views"/>
                            </li>
                            <li>Topic
                                3 <FontAwesomeIcon icon={faThumbsUp} size="1x" alt="views"/>
                                1 <FontAwesomeIcon icon={faComments} size="1x" alt="views"/>
                                7 <FontAwesomeIcon icon={faStar} size="1x" alt="views"/>
                            </li>
                            <li>Topic
                                1 <FontAwesomeIcon icon={faThumbsUp} size="1x" alt="views"/>
                                4 <FontAwesomeIcon icon={faComments} size="1x" alt="views"/>
                                7 <FontAwesomeIcon icon={faStar} size="1x" alt="views"/>
                            </li>
                        </ul>
                    </ObjectFooter>
                </AsideContentWrapper>
            </Content>
        </OneFourthDiv>
        </>
)

export default RightAside