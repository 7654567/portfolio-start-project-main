import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../components/SectionTitle";
import {Icon} from "../../components/Icon";
import {IconWrap} from "./Skills";
import {FlexContainer} from "../../components/FlexContainer";

// type TestimonyPropsTypes = {}
export const Testimony = () => {
	return (
		<SteyledTestimony>
			<SectionTitle>
				Testimony
			</SectionTitle>
			<FlexContainer flexDirection={"column"}>
			<IconWrap>
				<Icon iconId={"quote"}></Icon>
			</IconWrap>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				</p>
				<a href="#">@ivan ivanow</a>
		</FlexContainer>
		</SteyledTestimony>
	);
};

const SteyledTestimony = styled.section`
	svg {
	  margin: 90px 70px;
	}
  p {
    width: 550px;
    text-align: center;
    margin: 0 auto;
  }
  a {
    text-align: center;
    font-family: "Josefin Sans","sans-serif";
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
	padding: 22px 0 50px;
  }
  
`