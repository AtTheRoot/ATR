import React from "react"
import styled from "@emotion/styled"
import {greyLight, grey, greyDark} from "../theme/colors"
import {marginTop, contentPadding} from "../theme/page"
import Search from "./SearchBar"
import RightNav from "./RightNav"

// Full Width subnav on the Checklist page

const SubNavWrapper = styled.nav`
    outline: 1px ${grey} solid;
    outline-offset: 1rem;
    width: 100vw;
    margin: 0 auto;
    left: 0;
    margin-top: ${marginTop};
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    height: 60px;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    display: flex;
    margin-bottom: 2rem;
`

const SubNav = () => {
    return (
        <SubNavWrapper>
            <Search/>
            <RightNav/>
        </SubNavWrapper>
    )
}

export default SubNav