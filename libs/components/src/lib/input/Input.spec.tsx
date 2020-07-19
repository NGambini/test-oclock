import React from 'react';
import { render } from '@testing-library/react';

import { Input } from './Input';

describe('Input', () => {
  it('renders correctly', () => {
    const { baseElement: input } = render(
      <Input icon="account_balance" placeholder="Placeholder" value="" />
    );
    expect(input).toMatchSnapshot();
  });
});
