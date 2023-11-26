import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../components/SectionTitle";
import {colors} from "../../styles/theme";
import {Button} from "../../components/Button";

// type ContactPropsTypes = {}
export const Contact = () => {
	return (
		<SteyledContact>
			<SectionTitle>
				My Contact
			</SectionTitle>

			<form action="#">
				<input type="text" name="name" placeholder="Name"/>
				<input type="text" name="email" placeholder="Email"/>
				<textarea placeholder="Text"></textarea>
				<Button>Send message</Button>
			</form>
		</SteyledContact>
	);
};

const SteyledContact = styled.section`
	form {
	  width: 540px;
	  margin: 90px auto 0;
	  input, textarea {
		display: block;
		width: 100%;
        background-color: ${colors.secondary};
        border: 1px solid #4A4A4A;
		margin-bottom: 15px;
		padding: 0 15px;
		
		
	  }
	  input {
		height: 32px;
	  }
	  textarea {
		height: 155px;
        padding: 10px 15px;
	  }
	 
	  
	}

`