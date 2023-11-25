import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../components/SectionTitle";

// type ContactPropsTypes = {}
export const Contact = () => {
	return (
		<SteyledContact>
			<SectionTitle>
				My Contact
			</SectionTitle>

			<form action="#">
				<input type="text" name="name" placeholder="name"/>
				<input type="text" name="email" placeholder="email"/>
				<textarea></textarea>
				<input type="sublin" value="Send message"/>
			</form>
		</SteyledContact>
	);
};

const SteyledContact = styled.section`

`