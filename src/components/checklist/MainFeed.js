import React from "react"
import styled from "@emotion/styled"

import {  ThreeFourthDiv, Content } from "../theme/page";
import { SecondaryHighlightHeader} from "../theme/MarkedHeader";

import FeedRow from "./FeedRow"

const MainFeed = () => (

        <ThreeFourthDiv>
            <Content>
               <SecondaryHighlightHeader> Main Feed </SecondaryHighlightHeader>
                <hr/>
                <FeedRow/>
                <FeedRow/>
                <FeedRow/>
                <FeedRow/>
            </Content>
        </ThreeFourthDiv>
)

export default MainFeed