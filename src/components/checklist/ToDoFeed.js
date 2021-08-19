import React from "react"
import styled from "@emotion/styled"

import MainFeed from "./MainFeed"
import RightAside from "./RightAside";
import {PageContainer, ObjectFooter} from "../theme/page";

const ToDoFooter = styled(ObjectFooter)`
    text-align: center;
    margin-bottom: 5em;
    vertical-align: middle;
`

const ToDoFeed = () => (
    <>
    <PageContainer>
        <MainFeed/>
        <RightAside/>
    </PageContainer>
    <ToDoFooter>
        <span>Newer Threads </span>
        1 of 3,653
        <span> Older Threads</span>
    </ToDoFooter>
    </>
)

export default ToDoFeed