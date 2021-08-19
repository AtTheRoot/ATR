import { Container, Box } from "@chakra-ui/react"
import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { OrangeHighlightHeader, SecondaryHighlightHeaderThree } from "../theme/MarkedHeader";
import {greyDark} from "../theme/colors"
import styled from "@emotion/styled"
import ButtonOutlined from './Button'
import {GreyButton} from "../checklist/FeedRow"
import Card from "./Card"
import {PageContainer, ThreeFourthDiv, OneFourthDiv} from "../theme/page"
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {magenta} from "../theme/colors";

const boxShadow = (color) => {
	return `0.2em 0.2em 1px ${color} !important`
}

const HeroContainer = styled(PageContainer)`
    min-height: 4em;
    width: 100vw;
    margin: 0.5em;
    padding: 0 auto;
    line-height: 1em;
    cursor: pointer;
	transition-duration:  "0.1s";
	background-color: #f3f3f3;
	border: none;
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

const BasicUsage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <ButtonOutlined onClick={onOpen}>
      Modal
      </ButtonOutlined>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            What the fuck is happening to the styles that I'd like to get automatically.
          </ModalBody>

          <ModalFooter>
            <ButtonOutlined onClick={onClose}>
              Close
            </ButtonOutlined>
            <ButtonOutlined>Secondary Action</ButtonOutlined>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

const Hero = () => (
<Container maxW="md" centerContent>
    <h2>
    At The Root Checklist
    </h2>
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
            <OneFourthDiv>
                We believe... <br/>
                <ul>
                    <li>Tech is not the solution to all our problems, people are.</li>
                    <li>Experience trumps theory</li>
                    <li>Prioritize the most marginalized.</li>
                </ul>
                <div>
                    Learn More about our values >>
                </div>
            </OneFourthDiv>
        </PageContainer>
        </HeroContent>
    </HeroContainer>
    <HeroContainer>
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
    </HeroContainer>
    {/*<CardControlsWrapper>
            <CardControls>
                <ArrowButton><FontAwesomeIcon icon={faArrowLeft} size="2x" alt="views"/></ArrowButton>
                <ArrowButton><FontAwesomeIcon icon={faArrowRight} size="2x" alt="views"/></ArrowButton>
            </CardControls>
        </CardControlsWrapper>*/}
    {/* <Box p="4" color="gray.800" maxW="3xl">
    There are many benefits to a joint design and development system. Not only
    does it bring benefits to the design team.

  </Box>
  <BasicUsage /> */}
</Container>
)

export default Hero