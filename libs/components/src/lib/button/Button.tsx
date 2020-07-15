import React from 'react';

import * as styles from './button.module.less';

export type ButtonProps = {
  title: string;
  onClick?: () => void;
};

export const Button = (props: ButtonProps) => {
  return (
    <button onClick={props.onClick} className={styles['button']}>
      {props.title}
    </button>
  );
};
