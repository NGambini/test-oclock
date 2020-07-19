import React from 'react';
import { render } from '@testing-library/react';

import { Result } from './Result';

describe('Result', () => {
  it('renders correctly', () => {
    const { baseElement: result } = render(<Result symbol="USD" value={50} />);
    expect(result).toMatchSnapshot();
  });
});
