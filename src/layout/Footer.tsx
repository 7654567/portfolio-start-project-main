import React from 'react';
import styled from "styled-components";
import {Icon} from "../components/Icon";
import {colors} from "../styles/theme";

const socData = [
	{icon:"instagram", link:"telegram.org"},
	{icon:"telegram", link:"telegram.org"},
	{icon:"vk", link:"telegram.org"},
	{icon:"linkedin", link:"telegram.org"}
]
// type FooterPropsTypes = {}
export const Footer = () => {
	return (
		<SteyledFooter>
			<h3>Svetlana</h3>
			<ul>
				{socData.map((item) => {
					return (
						<li>
							<a href={item.link}>
								<Icon iconId={item.icon}></Icon>
							</a>
						</li>
					)
				})}

			</ul>
			<p>© 2023 Svetlana Dyablo, All Rights Reserved.</p>
		</SteyledFooter>
	);
};

const SteyledFooter = styled.div`
  	padding: 40px 0;
    p {
	  text-align: center;
      font-size: 12px;
      color: rgba(255, 255, 255, 0.50);
	}
  h3 {
	text-align: center;
    font-family: "Josefin Sans", "sans-serif";
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 3px;
  }
  ul {
	margin: 30px 0;
	display: flex;
	justify-content: center;
	gap: 20px;
	a {
	  display: block;
      width: 35px;
      height: 35px;
      border-radius: 25px;
      background: rgba(255, 255, 255, 0.10);
	  padding: 7px;
      svg {
        fill: ${colors.acsent};
      }
	  &:hover {
        background: ${colors.acsent};
		svg {
          fill: ${colors.primary};
		}
	  }
	}
  }
`