import React from 'react';
import styled from "styled-components";
import {Container} from "../components/Container";
import {FlexContainer} from "../components/FlexContainer";
import {Icon} from "../components/Icon";

// type HeaderPropsTypes = {}
export const Header = () => {
	return (
		<SteyledHeader>
			<Container>
				<FlexContainer justifyContent={"space-between"}>
					<Icon iconId={"code"}></Icon>
					<ul>
						<li><a href="#">Home</a></li>
						<li><a href="#">Skills</a></li>
						<li><a href="#">Works Works</a></li>
						<li><a href="#">Testimony</a></li>
						<li><a href="#">Contact</a></li>

					</ul>
				</FlexContainer>

			</Container>
		</SteyledHeader>
	);
};

const SteyledHeader = styled.div`
  ul {
    display: flex;

    a {
      padding: 20px 10px;
      display: block;

    }
  }

`