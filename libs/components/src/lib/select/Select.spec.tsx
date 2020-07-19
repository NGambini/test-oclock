import React from 'react';
import { render } from '@testing-library/react';

import { Select } from './Select';

describe('Select', () => {
  it('renders correctly', () => {
    const { baseElement: select } = render(
      <Select
        icon="language"
        placeholder={'Convert to...'}
        value="1"
        options={[
          { key: '1', name: 'First' },
          { key: '2', name: 'Second' },
          { key: '3', name: 'Third' },
        ]}
      />
    );
    expect(select).toMatchSnapshot();
  });
});
