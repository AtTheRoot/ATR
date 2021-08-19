import React from "react"
import styled from "@emotion/styled"
import {MagentaButton} from "../checklist/FeedRow";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
library.add(faSearch);

const SearchWrapper = styled.input`
    line-height: 1;
    height: 100%;
    max-width: 70vw;    
    apprearance: none;
    border: 0;
    flex: 1 0 auto;
    background-color: transparent;
    overflow: visible;
    padding: 0 0 0 2rem;
`

const SearchButton = styled(MagentaButton)`
    order: -3;
    height: 100%;
    padding: 0 2rem;
`

const Search = () => {
    return (
        <>
        <SearchButton>
         <FontAwesomeIcon icon={faSearch} size="lg" alt="search"/>
        </SearchButton>
        <SearchWrapper placeholder={"Search"}></SearchWrapper>
        </>
    )
}

export default Search