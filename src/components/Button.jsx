import styled from 'styled-components';
import PropTypes from 'prop-types';
import { color } from 'styled-system';

const Button = styled.button`

  box-sizing: border-box;
  display: inline-block;
  text-align: center;
  height: 50%;
  border: 1px solid;
  padding: 9px 12px;
  background-color: yellow;
  border-radius: 6px;
  margin: 1rem;
  font-weight: bold;
  font-size: 12px;
  background: ${props => props.dark ? "#3e0254" : "#aaaaaa"};
  color: ${props => props.dark ? "#aaaaaa" : "#3e0254"};

  &:hover:not(:disabled),
  &:active:not(disabled),
  &:focus {
    outline: 0;
    color: white;
    background-color: 
    #302833
    ;
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

export const Primary = () => <Button>Button</Button>;