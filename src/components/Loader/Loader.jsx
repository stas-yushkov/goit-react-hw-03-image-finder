import PulseLoader from 'react-spinners/PulseLoader';
import { Wrapper } from './StyledComponents';
import { colors } from 'constants/colors';

export const Loader = () => {
  return (
    <Wrapper>
      <PulseLoader size={20} color={colors.searchbar} />
    </Wrapper>
  );
};
