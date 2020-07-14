import React from 'react';

import * as styles from './button.module.less';

export type ButtonProps = {
  title: string;
};

export const Button = (props: ButtonProps) => {
  return <button className={styles['button']}>{props.title}</button>;
};
