import React from 'react';
import MaterialIcon from '@material/react-material-icon';
import classNames from 'classnames';

import * as styles from './input.module.less';

export type InputProps = {
  placeholder?: string;
  icon?: string;
  type: string;
  onChange?: () => void;
};

export const Input = (props: InputProps) => {
  return (
    <div className={styles['input-container']}>
      {props.icon && (
        <MaterialIcon
          className={classNames(styles['input-icon'])}
          icon={props.icon}
        />
      )}
      <input
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        className={styles['input']}
      />
    </div>
  );
};
