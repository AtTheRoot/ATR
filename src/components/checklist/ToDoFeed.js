import React, { useState } from "react";
import styled from "@emotion/styled";

import MainFeed from "./MainFeed";
import RightAside from "./RightAside";
import {PageContainer, ObjectFooter} from "../theme/page";
import {ColorText} from "./MainFeed";
import {faArrowAltCircleLeft, faArrowAltCircleRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

//data
const topLevelData = require('../../demo/total-posts.json');
const feedData = require('../../demo/todo-feed.json');

const ToDoFooter = styled(ObjectFooter)`
    text-align: center;
    margin-bottom: 5em;
    vertical-align: middle;
`;

function ToDoFeed() {
    return(
        <>
            <PageContainer>
                <MainFeed data={feedData}/>
                <RightAside/>
            </PageContainer>
            <ToDoFooter>
                <ColorText><FontAwesomeIcon icon={faArrowAltCircleLeft} size="1x" alt="views"/> Newer Threads </ColorText>
                1 of 3,653
                <ColorText> Older Threads <FontAwesomeIcon icon={faArrowAltCircleRight} size="1x" alt="views"/> </ColorText>
            </ToDoFooter>
        </>
    )
}

export default ToDoFeed