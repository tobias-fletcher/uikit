import React from 'react';
import './ButtonView.css';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { color } from 'styled-system';
import Button from '../components/Button';


function ButtonView() {

  return (

    <div className='buttonView'>
      <h1>Button Variations</h1>
      <div>
        <Button dark>BUTTON</Button>
        <Button>BUTTON</Button>
      </div>
    </div>

  )
}

export default ButtonView;



