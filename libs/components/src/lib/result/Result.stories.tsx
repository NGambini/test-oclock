import React from 'react';
import { Result } from './Result';
import { number, text } from '@storybook/addon-knobs';

export default { title: 'Result' };

export const Default = () => (
  <Result symbol={text('Currency', 'USD')} value={number('Result', 50)} />
);
