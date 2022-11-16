import styled from 'styled-components';

import { colors } from 'constants/colors';

export const AppWrapper = styled.div`
  /* height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center; */
  font-size: 40;
  color: ${colors.color};

  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;
