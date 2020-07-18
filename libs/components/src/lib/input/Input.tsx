import React from 'react';
import MaterialIcon from '@material/react-material-icon';

import * as styles from './input.module.less';

export type InputProps = {
  value: string;
  placeholder?: string;
  icon?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = (props: InputProps) => {
  return (
    <div className={styles['input-container']}>
      {props.icon && (
        <MaterialIcon className={styles['input-icon']} icon={props.icon} />
      )}
      <input
        placeholder={props.placeholder}
        onChange={props.onChange}
        className={styles['input']}
        value={props.value}
      />
    </div>
  );
};
