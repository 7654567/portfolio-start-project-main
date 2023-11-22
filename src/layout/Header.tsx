import React from 'react';
import styled from "styled-components";

type HeaderPropsTypes = {}
export const Header = () => {
	return (
		<SteyledHeader>
			<ul>
				<li><a href="#">Home</a></li>
				<li><a href="#">Skills</a></li>
				<li><a href="#">Works Works</a></li>
				<li><a href="#">Testimony</a></li>
				<li><a href="#">Contact</a></li>
			</ul>
			<span>Hi There</span>
			<h2>I am Svetlana Dyablo</h2>
			<h1>A Web Developer.</h1>
		</SteyledHeader>
	);
};

const SteyledHeader = styled.div`
	
`