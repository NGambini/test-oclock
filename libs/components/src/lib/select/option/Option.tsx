import React from 'react';
import MaterialIcon from '@material/react-material-icon';
import classNames from 'classnames';

import * as styles from './option.module.less';

export type OptionProps = {
  label: string;
  value: string;
  active?: boolean;
  onClick: (key: string) => void;
};

export const Option = (props: OptionProps) => {
  return (
    <div
      data-cy="option"
      className={classNames(styles['option'], {
        [styles['option-active']]: props.active,
      })}
      // binding the param allows us to avoid declaring an arrow function
      onClick={props.onClick.bind(this, props.value)}
    >
      {props.active && (
        <MaterialIcon className={styles['option-icon-active']} icon="check" />
      )}
      <span>{props.label}</span>
    </div>
  );
};
