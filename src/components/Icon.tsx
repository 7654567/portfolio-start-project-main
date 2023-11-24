import React from 'react';
import styled from "styled-components";
import sprite from "../assets/svg/sprite.svg";

type IconPropsTypes = {
	iconId:string
}
export const Icon = (props:IconPropsTypes) => {
	return (
		<SteyledIcon>
			<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
				<use xlinkHref={`${sprite}#${props.iconId}`}/>
			</svg>
		</SteyledIcon>
	);
};

const SteyledIcon = styled.div`
	
`