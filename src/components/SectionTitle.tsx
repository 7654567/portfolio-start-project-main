import styled from "styled-components";
import {colors} from "../styles/theme";

// type SectionHeaderPropsTypes = {}
export const SectionTitle = styled.h2`
  font-family: "Josefin Sans", "sans-serif";
  font-size: 36px;
  font-weight: 600;
  letter-spacing: 5px;
  text-align: center;
  position: relative;
  margin-bottom: 100px;

  &:after {
    content: "";
    width: 55px;
    height: 1px;
    background-color: ${colors.acsent};
    position: absolute;
    bottom: -65px;
    left: 50%;
    transform: translate(-50%, -50%);
  }

`


