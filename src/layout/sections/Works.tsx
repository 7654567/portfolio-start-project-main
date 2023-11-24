import React from 'react';
import styled from "styled-components";
import {SectionHeader} from "../../components/SectionHeader";
import social from "../../assets/jpg/rectangle1.jpg";
import timer from "../../assets/jpg/rectangle2.jpg";

const works = [
	{
		img: social,
		link: "",
		header: "Social Network",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim Lorem ipsum dolor sit amet, consectetur adipisicing elit."
	},
	{
		img: timer,
		link: "",
		header: "Timer",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim Lorem ipsum dolor sit amet, consectetur adipisicing elit."
	}
]

// type WorksPropsTypes = {}
export const Works = () => {
	return (
		<SteyledWorks>
			<SectionHeader>
				My Works
			</SectionHeader>
			<ul>
				<li><a href="#">All</a></li>
				<li><a href="#">landing page</a></li>
				<li><a href="#">React</a></li>
				<li><a href="#">spa</a></li>
			</ul>
			{works.map((item) => {
				return (
					<div>
						<img src={item.img} alt="#"/>
						<h3>{item.header}</h3>
						<p>{item.text}</p>
						<button>Social</button>
						<button>Network</button>
					</div>
				)
			})}
		</SteyledWorks>
	);
};

const SteyledWorks = styled.section`

`