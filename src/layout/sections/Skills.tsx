import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../components/SectionTitle";
import {FlexContainer} from "../../components/FlexContainer";
import {Icon} from "../../components/Icon";
import {Container} from "../../components/Container";

const skills = [
	{
		iconId: "code",
		name: "Html5",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenim"
	},
	{
		iconId: "css3",
		name: "css3",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenim"
	},
	{
		iconId: "react",
		name: "React",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenim"
	},
	{
		iconId: "typescript",
		name: "typescript",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenim"
	},
	{
		iconId: "styledComponents",
		name: "styled components",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenim"
	},
	{
		iconId: "figma",
		name: "WEB DESIgN",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenim"
	}
]

// type SkillsPropsTypes = {}
export const Skills = () => {
	return (
		<section>
			<SectionTitle>
				My Skills
			</SectionTitle>
			<Container>
				<FlexContainer flexWrap={"wrap"}>
					{skills.map((item) => {
						return (

							<SteyledSkills>
								<IconWrap>

									<Icon iconId={item.iconId}></Icon>
								</IconWrap>
								<h3>{item.name}</h3>
								<p>{item.text}</p>
							</SteyledSkills>


						)
					})}
				</FlexContainer>
			</Container>
		</section>


	);
};

const SteyledSkills = styled.div`
	width: 380px;
  padding: 62px 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
	margin: 70px 0 15px;
  }
  

`
const IconWrap = styled.div`
  position: relative;
	&::after {
	  content:"";
      width: 80px;
      height: 80px;
      transform: rotate(45deg) translate(-50%, -50%);
      background: rgba(255, 255, 255, 0.10);
      position: absolute;
	  top:50%;
	  left: 50%;
	  transform-origin: top left;
	  
	}
`