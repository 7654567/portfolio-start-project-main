import React from 'react';
import styled from "styled-components";
import sprite from "../assets/svg/sprite.svg";

// type FooterPropsTypes = {}
export const Footer = () => {
	return (
		<SteyledFooter>
			<ul>
				<li>
					<a href="#">
						<svg>
							<use xlinkHref={`${sprite}#telegram`}/>
						</svg>
					</a>
				</li>
				<li><a href="#"></a></li>
				<li><a href="#"></a></li>
				<li><a href="#"></a></li>
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
`