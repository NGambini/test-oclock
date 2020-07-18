import React, { useState } from 'react';
import { Header } from './Header';
import { text } from '@storybook/addon-knobs';

export default { title: 'Header' };

export const Default = () => {
  return (
    <Header
      icon={text('Icon', 'payment')}
      title={text('Title', 'My Header Title')}
    />
  );
};
