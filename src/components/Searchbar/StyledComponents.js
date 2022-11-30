import styled from 'styled-components';

import { colors } from 'constants/colors';

export const SearchbarWrapper = styled.div`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: ${colors.white};
  background-color: ${colors.searchbar};
  box-shadow: ${colors.searchbarShadow};
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: ${colors.white};
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchFormButton = styled.button`
  margin: 0;
  padding: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
  opacity: 1;
}
`;

export const SearchFormButtonLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  &:placeholder {
  font: inherit;
  font-size: 18px;
}
`;
