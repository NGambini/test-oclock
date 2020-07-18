import React, { useState } from 'react';
import { Input } from './Input';
import { text } from '@storybook/addon-knobs';

export default { title: 'Input' };

export const Default = () => {
  const [value, setValue] = useState('');

  return (
    <Input
      icon={text('Icon', 'account_balance')}
      placeholder={text('Placeholder', 'Placeholder')}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
};
