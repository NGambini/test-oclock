import React, { useState } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { connect } from 'react-redux';

import { Button, Input, Header, Result, Select } from '@test-oclock/components';
import { IReduxState } from '../store/root.state';
import { ISymbolsState } from '../store/symbols';
import { IRates } from '../store/rates';

import 'libs/components/src/ui.less';

type StateProps = {
  symbols: ISymbolsState;
  rates: IRates;
};

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
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Container>
        <Row>
          <Col sm={4}>
            <Input
              icon="account_balance"
              placeholder="Amount in euros"
              type="number"
              onChange={(e) => setToConvert(parseInt(e.target.value))}
            />
          </Col>
          <Col sm={4}>fleche</Col>
          <Col sm={4}>
            <Select
              placeholder="Convert to..."
              value={targetCurrency}
              onChange={(key) => setTargetCurrency(key)}
              // options={[
              //   {
              //     key: '1',
              //     name: 'test',
              //   },
              //   {
              //     key: '2',
              //     name: 'test2',
              //   },
              //   {
              //     key: '3',
              //     name: 'test3',
              //   },
              // ]}
              options={Object.keys(symbols).map((key) => ({
                key: key,
                name: symbols[key],
              }))}
            />
          </Col>
        </Row>
      </Container>

      {toConvert && targetCurrency && (
        <Result
          value={toConvert * rates.rates[targetCurrency]}
          symbol={symbols[targetCurrency]}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state: IReduxState) => ({
  symbols: state.symbols,
  rates: state.rates, // todo make this a precise selector
});

export default connect<StateProps>(mapStateToProps)(App);
