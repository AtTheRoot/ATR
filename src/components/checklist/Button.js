import React from "react";
import styled from "@emotion/styled"

const boxShadow = (color) => {
	return `0.2em 0.2em 1px ${color}`
}

const Button = styled.button`
    height: 2em;
    margin: 0.5em;
    padding: 0 1em;
    font-size: 2em;
    line-height: 1em;
    text-transform: lowercase;
    background-color: white;
    cursor: pointer;
    
    &:active P
    border: none;
    border-radius: 0;
    }
`

const ButtonOutlined = styled(Button)`
    background-color: white;
    border: 2px solid orange;
	transition-duration:  "0.1s";
	box-shadow: ${boxShadow('orange')};

	&:hover {
		box-shadow: none;
		transform: translate(2px, 2px);
	}

	&:disabled {
		cursor: default;
		color: #ccc;
		background-image: repeating-linear-gradient(
			45deg,
			#eee 0,
			#eee 1px,
			transparent 0,
			transparent 50%
		);
		background-size: 0.4em 0.4em;
		border: 2px solid #aaa;
		box-shadow: ${boxShadow("#aaa")};
	}

	&:hover:disabled {
		transform: none;
	}
`

const ButtonText = styled(Button)`
	color: orange;
	border: none;

	&:hover {
		color: #aaa;
	}
`

const theme = {
	accent: "orange",
	transitionDuration: "0.1s"
}

export default ButtonOutlined