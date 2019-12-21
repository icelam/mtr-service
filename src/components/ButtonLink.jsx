import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ButtonLink = styled(Link)`
  margin-top: 1rem;
  display: inline-block;
  padding: 0.25rem 1rem;
  background-color: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.backgroundColor};
  border-radius: 0.125rem;
  opacity: 0.9;

  &:hover {
    color: ${(props) => props.theme.backgroundColor};
    opacity: 1;
  }
`;

export default ButtonLink;
