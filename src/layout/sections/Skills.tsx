import React from 'react';
import styled from "styled-components";
import {SectionHeader} from "../../components/SectionHeader";
import {FlexContainer} from "../../components/FlexContainer";
import sprite from "../../assets/svg/sprite.svg";

const skills = [
	{
		name: "css3",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenim"
	},
	{
		name: "React",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenim"
	},
	{
		name: "typescript",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenim"
	},
	{
		name: "styled components",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenim"
	},
	{
		name: "WEB DESIgN",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenim"
	},
	// {name:"css3", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenim"}
]

// type SkillsPropsTypes = {}
export const Skills = () => {
	return (
		<SteyledSkills>
			<SectionHeader>
				My Skills
			</SectionHeader>

			<FlexContainer>
				<svg>
					<use xlinkHref={`${sprite}#code`}/>
				</svg>
				<h3>html5</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
					et dolore magna aliqua Ut enim</p>
			</FlexContainer>
			{skills.map((item) => {
				return (
					<div>
						<h3>{item.name}</h3>
						<p>{item.text}</p>

					</div>
				)
			})}
		</SteyledSkills>
	);
};

const SteyledSkills = styled.section`

`