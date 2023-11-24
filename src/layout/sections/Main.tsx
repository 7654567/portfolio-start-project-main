import React from 'react';
import styled from "styled-components";
import photo from "../../assets/jpg/rectangle4.jpg";
import {FlexContainer} from "../../components/FlexContainer";
import {Container} from "../../components/Container";

import {colors} from '../../styles/theme';

// type MainPropsTypes = {}
export const Main = () => {
	return (
		<SteyledMain>
			<Container>
				<FlexContainer justifyContent={"space-between"}>

					<div>
						<span>Hi There</span>
						<h2>I am <span>Svetlana Dyablo</span></h2>
						<h1>A Web Developer.</h1>
					</div>
					<div className="imgWrap">
						<img src={photo} alt="photo"/>
					</div>


				</FlexContainer>
			</Container>

		</SteyledMain>
	);
};

const SteyledMain = styled.section`
  padding: 280px 0;

  & > span {
    font-size: 14px;
    font-style: normal;
  }

  h2 {
    font-family: "Josefin Sans", "sans-serif";
    font-size: 50px;
    font-weight: 700;
    letter-spacing: 2.5px;
    margin: 10px 0;

    span {
      border-bottom: 20px solid ${colors.acsent};
    }
  }

  h1 {
    font-size: 27px;
    font-weight: 400;
  }

  .imgWrap {
    border: 5px solid #7572D5;
    padding: 25px 0;
    position: relative;

    img {
      position: relative;
      right: 35px;
    }
  }

`;