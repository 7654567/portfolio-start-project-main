import React from 'react';
import styled from "styled-components";

type FlexContainerPropsTypes = {
	children:any
	flexDirection?:string
	justifyContent?:string
	alignItems?:string
	flexWrap?:string
	gap?:string

}
export const FlexContainer = (props:FlexContainerPropsTypes) => {
	return (
		<SteyledFlexContainer styles={props}> {props.children}</SteyledFlexContainer>
		// <Header1 test={"blue"}>text</Header1>
	);
};

const SteyledFlexContainer = styled.div<any>`
	display: flex;
  	flex-direction: ${props => props.styles.flexDirection || "row"};
  	justify-content: ${props => props.styles.justifyContent || "center"};
  	align-items: ${props => props.styles.alignItems || "center"};
  	flex-wrap: ${props => props.styles.flexWrap || "nowrap"};
  	gap: ${props => props.styles.gap || "normal"};
`
// const Header1 = styled.h1<{test:string}>`
// 	color: ${props => props.test || "green"};
// `