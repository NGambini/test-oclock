import React from 'react';
import { Button, ButtonProps } from './Button';

export default {
  component: Button,
  title: 'Button',
};

export const ButtonStory = () => {
  const props: ButtonProps = { title: 'yo' };

  return <Button title="yo" />;
};
