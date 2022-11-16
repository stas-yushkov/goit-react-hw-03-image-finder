import styled from "styled-components";

export const StyledButton = styled.button`
  margin: 0;
  padding: 10px;
  border: none;
  border-radius: 50%;
  color: ${props => props.color ? props.color : '#fff'};
  font: inherit;
  background-color: ${props => props.bgColor ? props.bgColor : '#000'};
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
