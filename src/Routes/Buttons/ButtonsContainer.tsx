import * as React from 'react';
import { Button } from './Button';

const ButtonsContainer = () => {
  return (
    <div>
      <Button>Click me!</Button>
      <Button disabled variant='secondary'>
        Disabled {`:(`}
      </Button>
    </div>
  );
};

export default ButtonsContainer;
