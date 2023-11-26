import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../components/SectionTitle";
import {Button} from "../../components/Button";

// type SloganPropsTypes = {}
export const Slogan = () => {
	return (
		<SteyledSlogan>
			<SectionTitle>
				I Am Available For Freelance
			</SectionTitle>
			<Button>Hire me</Button>
		</SteyledSlogan>
	);
};

const SteyledSlogan = styled.section`

`