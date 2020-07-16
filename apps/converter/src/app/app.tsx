import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Button, Input, Header, Result, Select } from '@test-oclock/components';
import { IReduxState } from '../store/root.state';

import 'libs/components/src/ui.less';

// todo type props
export const App = ({ dispatch, symbols, rates }) => {
  const [toConvert, setToConvert] = useState(0);
  const [targetCurrency, setTargetCurrency] = useState(null);

  return (
    <div>
      <Header icon="payment" title="Currency Converter" />
      <Button
        onClick={() => {
          dispatch({ type: 'SYMBOLS_FETCH_REQUESTED' });
          dispatch({ type: 'RATES_FETCH_REQUESTED' });
        }}
        title="get symbols and rates"
      />
      <Select />
      <input
        type="number"
        value={toConvert}
        onChange={(e) => setToConvert(parseInt(e.target.value))}
      />
      <Input
        icon="account_balance"
        placeholder="Amount in euros"
        type="number"
      />
      <Result value={99} symbol="USD" />
      <select
        value={targetCurrency}
        onChange={(e) => setTargetCurrency(e.target.value)}
      >
        {Object.keys(symbols).map((key) => (
          <option value={key}>{symbols[key]}</option>
        ))}
      </select>
      {toConvert && targetCurrency && (
        <div>
          result : {toConvert * rates.rates[targetCurrency]}{' '}
          {symbols[targetCurrency]}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state: IReduxState) => ({
  symbols: state.symbols,
  rates: state.rates, // todo make this a precise selector
});

export default connect(mapStateToProps)(App);
