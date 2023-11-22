import React from 'react';
import styled from "styled-components";
import {SectionHeader} from "../../components/SectionHeader";
import sprite from "../../assets/svg/sprite.svg";

type TestimonyPropsTypes = {}
export const Testimony = () => {
	return (
		<SteyledTestimony>
			<SectionHeader>
				Testimony
			</SectionHeader>
			<svg>
				<use xlinkHref={`${sprite}#quote`}/>
			</svg>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				@ivan ivanow</p>
		</SteyledTestimony>
	);
};

const SteyledTestimony = styled.div`
	
`