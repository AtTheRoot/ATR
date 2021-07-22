import React from "react"

import ForumLayout from "../components/forum-layout"
import SEO from "../components/seo"
import Hero from "../components/checklist/Hero";
import SubNav from "../components/checklist/SubNav"
import ToDoFeed from "../components/checklist/ToDoFeed"



const CheckListPage = ({data}) => {
    return (
        <ForumLayout>
            <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
            <Hero/>
            <SubNav/>
            <ToDoFeed/>
        </ForumLayout>
    )
}

export default CheckListPage