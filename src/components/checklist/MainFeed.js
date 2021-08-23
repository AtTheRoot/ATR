import React, {useState} from "react";
import styled from "@emotion/styled"

import FeedRow from "./FeedRow"

import { magenta, grey} from "../theme/colors";
import { ThreeFourthDiv, Content, borderRadius } from "../theme/page";
import { defaultFont } from "../theme/font"

import {library} from "@fortawesome/fontawesome-svg-core";
import {faDownload, faStar} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
library.add(faDownload, faStar);


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
    padding: 0 1rem 1rem 1rem;
`

export const ColorText = styled.span`
    color: ${magenta};
    font-weight: bold;
`

export const SmallColorText = styled.span`
    color: ${magenta};
    font-weight: bold;
    font-size: ${defaultFont};
    line-height: 1;
    margin-top: auto;
    padding-top: .5rem;
`


function MainFeed({data}) {
    const [checkCount, setCheckCount] = useState(0);
    const handleCheckBox = event => {
        if(event.currentTarget.checked){
            setCheckCount(checkCount+1);
        } else {
            setCheckCount(checkCount-1);
        }
    }
    return (
    <ThreeFourthDiv>
        <Content>
            {console.log(data)}
            <ResultsRowWrapper>
                <ResultsRow>Checklist <ColorText>0 out of {checkCount}</ColorText> </ResultsRow>
                <DownloadList>Download List <ColorText><FontAwesomeIcon icon={faDownload} size="1x"
                                                                        alt="views"/></ColorText></DownloadList> |
                <DownloadList> Star All <ColorText><FontAwesomeIcon icon={faStar} size="1x" alt="views"/></ColorText>
                </DownloadList>
            </ResultsRowWrapper>
            <hr/>
            {data.map(item => (<FeedRow key={item.id} value={checkCount} onChangeHandleCheckBox={handleCheckBox} data={item}/>))}
        </Content>
    </ThreeFourthDiv>
)
}

export default MainFeed