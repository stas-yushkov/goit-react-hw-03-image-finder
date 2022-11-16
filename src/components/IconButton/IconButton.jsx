import { StyledButton } from './StyledComponents';

export const IconButton = ({ children, onClick, ...allyProps }) => {
  return (
    <StyledButton type="button" onClick={onClick} {...allyProps}>
      {children}
    </StyledButton>
  );
};
