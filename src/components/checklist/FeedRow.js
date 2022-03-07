import React, {useEffect, useState} from "react";
import styled from "@emotion/styled";

import {defaultFont, smallFont} from "../theme/font";
import {borderColor, grey, greyLight, greyDark, magenta, magentaLighter} from "../theme/colors";
import {
    contentPaddingSmall,
    dropShadow,
    ThreeFourthDiv,
    OneFourthDiv,
    ObjectFooter,
    Content,
    borderRadius,
    contentPadding
} from "../theme/page";

import {SmallColorText} from "../checklist/MainFeed";

import {
    faHistory,
    faComments,
    faThumbsUp,
    faDownload,
    faUserAstronaut,
    faStar,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";



const FeedRowWrapper = styled.div`
    padding-top: 1em;
    min-height: 2em;
    border-top: 3px solid ${borderColor} !important;
    background-color: white;
    margin-bottom: 1em;
    box-shadow: ${dropShadow};
`;

const FeedContentWrapper = styled.div`
    display: flex;
    padding: ${contentPaddingSmall}
    padding-left: 0rem;
`;

const MainRowContent = styled(ThreeFourthDiv)`
`;

const IconsRowContent = styled(OneFourthDiv)`
    margin-left: auto;
    text-align: right;
    display: flex;
    justify-content: flex-end;
`;

const RowTitle = styled.h3`
    margin-bottom: 0em !important;
`;

const RowContent = styled.div`
    padding: ${contentPadding};
    margin-bottom: 0rem;
    padding-bottom: 0rem;
    padding-right: 0rem;
`;

const FeedFooter = styled(ObjectFooter)`
    display: flex;
    background-color: ${magentaLighter};
`;

export const FeedBadgeWrapper = styled(ObjectFooter)`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-top: 0rem !important;
`;

const FooterItems = styled.div`
    font-size: .85rem;
    vertical-align: middle;
`;

const FooterIcons = styled(FooterItems)`
    margin: auto .55em;
`;

export const Badge = styled(FooterItems)`
    background-color: transparent;
    padding: .25em .75em .15em .55em;
    margin-right: .25em;
    margin-bottom: 0rem;
    border-radius: ${borderRadius};
    border: 1px ${greyDark} solid;
    font-size: ${smallFont};
    color: ${greyDark};
    text-transform: uppercase;
`;

const UserCircle = styled.div`
    height: 2em;
    width: 2em;
    border-radius: 50%;
    border: 1px solid black;
    text-align:center;
    margin-right: -.5em;
    background-color: white;
    overflow: hidden;
    img {
        min-width: 100%;
        min-height: 100%;
        object-fit: cover;
    }
`;

const Button = styled.button`
    border-radius: ${borderRadius};
    padding: .25em .45em;
    align-items: center;
    justify-content: center;
    margin: 0rem 1rem;
    background-color: transparent;
`;

const SmallButton = styled(Button)`
    font-size: ${smallFont};
    padding: 0rem .45rem;
`;

export const GreyButton = styled(Button)`
    color: ${greyDark};
    border: 2px solid ${greyDark};
`;

export const GreyLightButton = styled(Button)`
    color: ${greyDark};
    border: 2px solid ${grey};
    background: ${greyLight};
`;

export const MagentaButton = styled(Button)`
    color: ${magenta};
    border: 2px solid ${magenta};
`;

export const SmallMagentaButton = styled(SmallButton)`
    color: ${magenta};
    border: 2px solid ${magenta};
`;

const PullRightFooter = styled.div`
    margin-left: auto;
`;

const Checkbox = styled.input`
    margin-left: -5em;
    transform: scale(1.5);
    margin-right: .5em;
`;

export const FeedDate = styled.p`
    font-size: ${defaultFont};
    padding: ${contentPadding};
    margin-bottom: 0rem;
    padding-bottom: 0rem;
`;


const FeedRow = ({ value, onChangeHandleCheckBox, data}) => {
    const abstractLimit = 400;
    const tagLimit = 7;
    const [starColor, setColor] = useState("black");
    const countStar = event => {
        if(starColor === "black"){
            setColor(`${magenta}`);
        } else {
            setColor("black");
        }
    }
    return(
    <FeedRowWrapper>
        <Content>
            <Checkbox onChange={onChangeHandleCheckBox} type={"checkbox"}/>
            <FontAwesomeIcon onClick={countStar} icon={faStar} color={starColor} size="1x" alt="views"/>
            <RowTitle>{data.title}</RowTitle>
            <FeedBadgeWrapper>
                {data.tags.slice(0,tagLimit).map((item,index) => <Badge key={index}>({item[0]}) {item[1]}</Badge>)}
                {data.tags.length > tagLimit && <SmallColorText>... {data.tags.length - tagLimit} more tag(s)</SmallColorText>}
            </FeedBadgeWrapper>
            <FeedContentWrapper>
                <RowContent>
                    {data.abstractShort.substring(0,abstractLimit)} {data.abstractShort.length > abstractLimit && <span>...</span>}
                </RowContent>
                <IconsRowContent>
                    {data.users.map((item,index) => <UserCircle key={index}><img key={index} src={item.icon}/></UserCircle>)}
                </IconsRowContent>
            </FeedContentWrapper>
        </Content>
        <FeedFooter>
            <FooterIcons>
                <FontAwesomeIcon icon={faHistory} size="xs" alt="views"/> {data.timeSince}
            </FooterIcons>
            <FooterIcons>
                <FontAwesomeIcon icon={faComments} size="xs" alt="views"/> {data.responses} Responses
            </FooterIcons>
            <FooterIcons>
                <FontAwesomeIcon icon={faThumbsUp} size="xs" alt="views"/> {data.likes} Likes
            </FooterIcons>
            <FooterIcons>
                <FontAwesomeIcon icon={faDownload} size="xs" alt="views"/> {data.downloads} Downloads
            </FooterIcons>
            <PullRightFooter>
                <MagentaButton>View Full Thread</MagentaButton>
            </PullRightFooter>
        </FeedFooter>
    </FeedRowWrapper>
    )
}

export default FeedRow