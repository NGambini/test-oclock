import React from 'react';
import { connect } from 'react-redux';

import { Button } from '@test-oclock/components';

export const App = ({ dispatch }) => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./app.less file.
   */
  return (
    <div>
      <Button
        onClick={() => {
          dispatch({ type: 'SYMBOLS_FETCH_REQUESTED' });
          dispatch({ type: 'RATES_FETCH_REQUESTED' });
        }}
        title="btn from storybook"
      />
    </div>
  );
};

export default connect()(App);
