import styled from "styled-components";
import {colors} from "../styles/theme";


export const Button = styled.button`
    font-size: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 10px;
    background-color: transparent;
    border: none;
    margin: 0 auto;
    display: block;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translate(-50%, -50%);
      width: calc(77px);
      height: 10px;
      background-color: ${colors.acsent};
    }
`