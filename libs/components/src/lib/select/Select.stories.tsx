import React, { useState } from 'react';
import { Select } from './Select';
import { number, text } from '@storybook/addon-knobs';

export default { title: 'Select' };

export const Default = () => {
  const [value, setValue] = useState(null);

  return (
    <Select
      icon={text('Icon', 'language')}
      placeholder={text('Placeholder', 'Convert to...')}
      value={value}
      onChange={(key) => setValue(key)}
      options={[
        { key: '1', name: 'First' },
        { key: '2', name: 'Second' },
        { key: '3', name: 'Third' },
      ]}
    />
  );
};
