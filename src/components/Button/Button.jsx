import { StyledButton } from './StyledComponents';

export const Button = ({ children, onClick }) => {
  return (
    <StyledButton onClick={onClick} type="button">
      {children}
    </StyledButton>
  );
};
