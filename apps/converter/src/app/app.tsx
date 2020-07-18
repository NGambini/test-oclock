import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { connect } from 'react-redux';
import MaterialIcon from '@material/react-material-icon';

import { Input, Header, Result, Select } from '@test-oclock/components';
import { IReduxState } from '../store/root.state';
import { ISymbolsState } from '../store/symbols';
import { IRates } from '../store/rates';

// global UI styles
import 'libs/components/src/ui.less';

import * as styles from './app.module.less';

type StateProps = {
  symbols: ISymbolsState;
  rates: IRates;
};

// todo type props
export const App = ({ dispatch, symbols, rates }) => {
  const [toConvert, setToConvert] = useState(null);
  const [targetCurrency, setTargetCurrency] = useState(null);

  /*
  second parameter are values to watch
  providing an empty array is eq. to ComponentDidMount
  */
  useEffect(() => {
    dispatch({ type: 'SYMBOLS_FETCH_REQUESTED' });
    dispatch({ type: 'RATES_FETCH_REQUESTED' });
  }, []);

  return (
    <div>
      <Header icon="payment" title="Currency Converter" />
      <Container className={styles['form-row']}>
        <Row justify="center" align="center">
          <Col sm={5}>
            <Input
              icon="account_balance"
              placeholder="Amount in euros"
              type="number"
              onChange={(e) => setToConvert(parseInt(e.target.value))}
            />
          </Col>
          <Col sm={2}>
            <MaterialIcon
              className={styles['icon-arrow']}
              icon="arrow_right_alt"
            />
          </Col>
          <Col sm={5}>
            <Select
              icon="language"
              placeholder="Convert to..."
              value={targetCurrency}
              onChange={(key) => setTargetCurrency(key)}
              options={Object.keys(symbols).map((key) => ({
                key: key,
                name: symbols[key],
              }))}
            />
          </Col>
        </Row>
        <Row align="center" justify="center">
          <Col>
            {toConvert && targetCurrency && (
              <Result
                value={toConvert * rates.rates[targetCurrency]}
                symbol={symbols[targetCurrency]}
              />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = (state: IReduxState) => ({
  symbols: state.symbols,
  rates: state.rates, // todo make this a precise selector
});

export default connect<StateProps>(mapStateToProps)(App);
