import styled from 'styled-components';
import PropTypes from 'prop-types';
import { color } from 'styled-system'

const Button = styled.button`

  box-sizing: border-box;
  display: inline-block;
  text-align: center;
  border: 1px solid;
  padding: 8px 16px;
  background-color: yellow;
  border-radius: 5px;
  margin: 1rem;
  font-weight: bold;
  background: ${props => props.dark ? "#3e0254" : "#aaaaaa"};
  color: ${props => props.dark ? "#aaaaaa" : "#3e0254"};

  &:hover:not(:disabled),
  &:active:not(disabled),
  &:focus {
    outline: 0;
    color: white;
    background-color: #9d00a2;
    cursor: pointer;
  }

`;





export default Button;

Button.defaultProps = {
  variant: 'secondary',
};

Button.propTypes = {
  variant: PropTypes.oneOf(['secondary', 'primary']),
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};