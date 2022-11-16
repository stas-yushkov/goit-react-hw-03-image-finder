import styled from 'styled-components';

// import { colors } from 'constants/colors';
// 
// export const StyledButton = styled.button`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: fit-content;
//   padding: ${props => props.submit ? '20px' : '10px'};
//   background-color: ${colors.buttonBg};
//   color: ${colors.button};
//   border: 1px solid ${colors.buttonBorder};
//   border-radius: 5px;

//   &:hover,
//   &:focus {
//     background-color: ${colors.buttonBghoverFocus};
//     outline: none;
//   }
//   &:active {
//     background-color: ${colors.buttonBgPressed};
//   }
// `

export const StyledButton = styled.button`
  padding: 8px 16px;
  border-radius: 2px;
  background-color: #3f51b5;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover,
  &:focus {
    background-color: #303f9f;
  }
`;
