import React from 'react';
import styled from "styled-components";
import {SectionHeader} from "../../components/SectionHeader";

type SloganPropsTypes = {}
export const Slogan = () => {
	return (
		<SteyledSlogan>
			<SectionHeader>
				I Am Available For Freelance
			</SectionHeader>
			<a href="">Hire me</a>
		</SteyledSlogan>
	);
};

const SteyledSlogan = styled.div`
	
`