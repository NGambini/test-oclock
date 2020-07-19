import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Visible } from 'react-grid-system';
import { connect } from 'react-redux';
import MaterialIcon from '@material/react-material-icon';

import { Input, Header, Result, Select } from '@test-oclock/components';
import { IReduxState } from '../store/root.state';
import { ISymbolsState } from '../store/symbols';
import { IRates } from '../store/rates';

// global UI styles
import 'libs/components/src/ui.less';

import * as styles from './app.module.less';

console.log(process.env);

type StateProps = {
  symbols: ISymbolsState;
  rates: IRates;
};

// todo type props
export const App = ({ dispatch, symbols, rates }) => {
  const [toConvert, setToConvert] = useState('');
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
          <Col lg={5}>
            <Input
              icon="account_balance"
              placeholder="Amount in euros"
              value={toConvert}
              onChange={(e) => {
                // only keep numbers and .
                if (e.target.value.match(/^\d*\.?\d{0,2}$/)) {
                  setToConvert(e.target.value);
                }
              }}
            />
          </Col>
          <Col lg={2} className={styles['icon-arrow-container']}>
            <Visible xs sm md>
              <MaterialIcon
                className={styles['icon-arrow']}
                icon="expand_more"
              />
            </Visible>
            <Visible lg xl xxl>
              <MaterialIcon
                className={styles['icon-arrow']}
                icon="chevron_right"
              />
            </Visible>
          </Col>
          <Col lg={5}>
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
      </Container>
      <div className={styles['result-wrapper']}>
        <div className={styles['result-inner']}>
          {toConvert && targetCurrency && (
            <Result
              value={parseFloat(toConvert) * rates.rates[targetCurrency]}
              symbol={symbols[targetCurrency]}
            />
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: IReduxState) => ({
  symbols: state.symbols,
  rates: state.rates, // todo make this a precise selector
});

export default connect<StateProps>(mapStateToProps)(App);
