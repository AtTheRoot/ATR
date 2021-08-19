import React from "react"
import styled from "@emotion/styled"

import FeedRow from "./FeedRow"

import {magenta, grey} from "../theme/colors";
import { ThreeFourthDiv, Content, borderRadius } from "../theme/page";
import { SecondaryHighlightHeader} from "../theme/MarkedHeader";

import {library} from "@fortawesome/fontawesome-svg-core";
import {faDownload} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
library.add(faDownload);

const ResultsRowWrapper = styled.div`
    display:flex;
    width: 100%;
    font-size: 14px;
`

const ResultsRow = styled.div`
    margin-left: auto;
    padding-bottom: 1rem;
    ::after {
        content: "uncheck all";
        font-size: 10px;
        left: -10%;
        top: -130%;
        position: relative;
        border: 1px solid ${grey};
        border-radius: ${borderRadius};
        padding: .25rem;
        color: ${grey};
    }
`

const DownloadList = styled.div`
    padding-bottom: 1rem;
`

const ColorText = styled.span`
    color: ${magenta};
`

const UncheckButton = styled.button`
`

const MainFeed = () => (

        <ThreeFourthDiv>
            <Content>
                <ResultsRowWrapper>
                    <ResultsRow>Checklist <ColorText>0 out of 1,378</ColorText> </ResultsRow>
                    <DownloadList>Download List <FontAwesomeIcon icon={faDownload} size="md" alt="views"/></DownloadList> |
                    <DownloadList>Save List <FontAwesomeIcon icon={faDownload} size="md" alt="views"/></DownloadList>
                </ResultsRowWrapper>
                <hr/>
                <FeedRow/>
                <FeedRow/>
                <FeedRow/>
                <FeedRow/>
            </Content>
        </ThreeFourthDiv>
)

export default MainFeed