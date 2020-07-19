import React, { useRef } from 'react';
import MaterialIcon from '@material/react-material-icon';

import * as styles from './input.module.less';
import { Ripple } from '../utils/ripple/Ripple';
import { reference } from '@popperjs/core';

export type InputProps = {
  value: string;
  placeholder?: string;
  icon?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = (props: InputProps) => {
  const inputEl = useRef<HTMLInputElement>(null);

  return (
    <div
      data-cy="input"
      className={styles['input-container']} // wrapper is required for Ripple
      onClick={() => inputEl.current.focus()} // forward click down to input
    >
      <Ripple />
      {props.icon && (
        <MaterialIcon className={styles['input-icon']} icon={props.icon} />
      )}
      <input
        ref={inputEl}
        placeholder={props.placeholder}
        onChange={props.onChange}
        className={styles['input']}
        value={props.value}
      />
    </div>
  );
};
