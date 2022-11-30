import styled from 'styled-components';

import { colors } from 'constants/colors';

export const StyledButton = styled.button`
  padding: 8px 16px;
  border-radius: 2px;
  background-color: ${colors.searchbar};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: ${colors.white};
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: ${colors.buttonShadow};

  &:hover,
  &:focus {
    background-color: ${colors.searchbarFocus};
  }
`;
