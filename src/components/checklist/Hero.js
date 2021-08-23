import React from "react";
import { OrangeHighlightHeader, SecondaryHighlightHeaderThree } from "../theme/MarkedHeader";
import {greyDark} from "../theme/colors"
import styled from "@emotion/styled"
import ButtonOutlined from './Button'
import {GreyButton} from "../checklist/FeedRow"
import Card from "./Card"
import {PageContainer, ThreeFourthDiv, OneFourthDiv, OneThirdDiv, dropShadow} from "../theme/page"
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {magenta, magentaLighter, greyLight} from "../theme/colors";
import {ColorText} from "./MainFeed"

const boxShadow = (color) => {
	return `0.2em 0.2em 1px ${color} !important`
}

const HeroContainer = styled(PageContainer)`
    min-height: 4em;
    width: 100vw;
    margin: 0em -11vw;
    padding: 0 auto;
    line-height: 1em;
    cursor: pointer;
	transition-duration:  "0.1s";
	background-color: #f3f3f3;
	border: none;
`

const TealHeroContainer = styled(HeroContainer)`
margin-top: .25rem;
margin-bottom: 2rem;
	background-color: ${magentaLighter};
	box-shadow: ${dropShadow};
	border-bottom: 1px ${magenta} solid;
`

const HeroContent = styled.div`
    width: 80vw;
    display: flex;
    margin:auto;
    padding-top: 1rem;
`

const HeaderContainer = styled.h1`
    display: block;
    margin: auto;
`

const TrendingContainer = styled(HeroContainer)`
  background-image: 
  linear-gradient(transparent 11px, rgba(220,220,200,.8) 12px, transparent 12px),
  linear-gradient(90deg, transparent 11px, rgba(220,220,200,.8) 12px, transparent 12px);
  background-size: 100% 12px, 12px 100%;
`


const ThreeColumnsWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const CardControlsWrapper = styled.div`
    display: flex;
    position: relative;
    width: 100vw;
`

const CardControls = styled.div`
    display: table;
    margin: 0 auto;
    padding-top: 1rem;
`

const ArrowButton = styled.a`
    margin: 0 3rem;
    color: ${magenta};
`

const NewsletterBox = styled(OneFourthDiv)`
    text-align: center;
    margin: auto;
    vertical-align: middle;
`

const Hero = () => (
    <>
    <HeroContainer>
        <HeroContent>
        <PageContainer>
            <ThreeFourthDiv>
                <h1>Actively Anti Racist Engineers</h1>
                <SecondaryHighlightHeaderThree>Take an active part in the world your software builds.</SecondaryHighlightHeaderThree>
                <br/>
                <br/>
                <p>It is easy and free to post your thinking on any topic and connect with the antiracist technologist community.</p>
            </ThreeFourthDiv>
            <NewsletterBox>
                <GreyButton>Join our newsletter</GreyButton>
            </NewsletterBox>
            <OneThirdDiv>
                <p>We believe... </p><br/>
                <ul>
                    <li>Tech is not the solution to all our problems, people are.</li>
                    <li>Experience trumps theory</li>
                    <li>Prioritize the most marginalized.</li>
                </ul>
                <div>
                    <ColorText>Learn More about our values >></ColorText>
                </div>
            </OneThirdDiv>
        </PageContainer>
        </HeroContent>
    </HeroContainer>
    <TealHeroContainer>
        <HeroContent>
            <span>Welcome Name, </span>
            <span>Community</span>
            <span>Account</span>
            <span>Collectives</span>
        </HeroContent>
    </TealHeroContainer>
    <TrendingContainer>
        <HeroContent>
            <h4>Trending Topics</h4>
            <ThreeColumnsWrap>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            </ThreeColumnsWrap>
        </HeroContent>
    </TrendingContainer>
    </>
)

export default Hero