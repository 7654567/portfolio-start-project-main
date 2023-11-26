import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../components/SectionTitle";
import social from "../../assets/jpg/rectangle1.jpg";
import timer from "../../assets/jpg/rectangle2.jpg";
import {colors} from "../../styles/theme";
import {FlexContainer} from "../../components/FlexContainer";

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
			<SectionTitle>
				My Works
			</SectionTitle>
			<ul>
				<li><a href="#">All</a></li>
				<li><a href="#">landing page</a></li>
				<li><a href="#">React</a></li>
				<li><a href="#">spa</a></li>
			</ul>
			<FlexContainer gap={"60px"}>
				{works.map((item) => {
					return (
						<div>
							<ImgWrap>
								<img src={item.img} alt="#"/>
								<button>view project</button>
							</ImgWrap>
							<ContentWrap>
								<h3>{item.header}</h3>
								<p>{item.text}</p>
								<button>Social</button>
								<button>Network</button>
							</ContentWrap>
						</div>
					)
				})}
			</FlexContainer>
		</SteyledWorks>
	);
};

const SteyledWorks = styled.section`
  ul {
    font-size: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    margin-bottom: 40px;

    li {
      padding: 0 15px;

    }

    a:hover {
      border-bottom: 10px solid ${colors.acsent};
    }

    img {
      width: 100px;
      //TODO width
    }

  }


`
const ContentWrap = styled.div`
  background-color: ${colors.secondary};
  padding: 25px 20px 35px;

  h3 {
    font-family: "Josefin Sans", "sans-serif";
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 1px;
  }

  p {
    margin: 20px 0;
  }

  button {
    color: ${colors.font};
    font-weight: 400;
    letter-spacing: 1px;
    text-transform: uppercase;
    border: none;
    background-color: transparent;
    padding: 10px 10px 0;

    &:hover {
      position: relative;

      &::after {
        content: "";
        position: absolute;
        bottom: -10px;
        left: 10px;
        width: calc(100% - 20px);
        height: 10px;
        background-color: ${colors.acsent};

      }
    }
  }
`
const ImgWrap = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;

  img {
    width: 100%;
  }

  button {
    padding: 10px 30px;
    color: ${colors.font};
    background-color: ${colors.acsent};
    letter-spacing: 1px;
    text-transform: uppercase;
    border: none;
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

  }

  &:hover {
	img {
      filter: blur(5px);
	}
    button {
      display: block;
    }
  }
`