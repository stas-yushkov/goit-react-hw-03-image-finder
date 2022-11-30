import styled from "styled-components";

import { colors } from "constants/colors";

export const StyledButton = styled.button`
  margin: 0;
  padding: 10px;
  border: none;
  border-radius: 50%;
  color: ${props => props.color ? props.color : colors.white};
  font: inherit;
  background-color: ${props => props.bgColor ? props.bgColor : colors.black};
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
