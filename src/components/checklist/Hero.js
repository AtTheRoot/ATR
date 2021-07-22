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
import { OrangeHighlightHeader, SecondaryHighlightHeader } from "../theme/MarkedHeader";
import styled from "@emotion/styled"
import ButtonOutlined from './Button'
import Card from "./Card"
import { PageContainer } from "../theme/page"

const boxShadow = (color) => {
	return `0.2em 0.2em 1px ${color} !important`
}

const HeroContainer = styled(PageContainer)`
    min-height: 4em;
    width: 80vw;
    margin: 0.5em;
    padding: 0 auto;
    line-height: 1em;
    cursor: pointer;
    border: none;
	transition-duration:  "0.1s";
	background-color: #f3f3f3;
	display: flex;
`

const HeaderContainer = styled.h1`
    display: block;
    margin: auto;
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
    <SecondaryHighlightHeader>
    At The Root Checklist
    </SecondaryHighlightHeader>
    <HeroContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    </HeroContainer>
  <Box p="4" color="gray.800" maxW="3xl">
    There are many benefits to a joint design and development system. Not only
    does it bring benefits to the design team.

  </Box>
  <BasicUsage />
</Container>
)

export default Hero