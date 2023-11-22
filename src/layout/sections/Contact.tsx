import React from 'react';
import styled from "styled-components";
import {SectionHeader} from "../../components/SectionHeader";

type ContactPropsTypes = {}
export const Contact = () => {
	return (
		<SteyledContact>
			<SectionHeader>
				My Contact
			</SectionHeader>

			<form action="#">
				<input type="text" name="name" placeholder="name"/>
				<input type="text" name="email" placeholder="email"/>
				<textarea></textarea>
				<input type="sublin" value="Send message"/>
			</form>
		</SteyledContact>
	);
};

const SteyledContact = styled.div`
	
`