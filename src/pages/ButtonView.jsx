import React from 'react';
import './ButtonView.css';

import Button from '../components/Button';


function ButtonView() {

  return (
    <>
      <div>
        <h1>Button Variations</h1>
        <div>
          <Button dark>Button</Button>
          <Button>Button</Button>
        </div>
      </div>
    </>
  )
}

export default ButtonView;