import React from 'react';
import MaterialIcon from '@material/react-material-icon';

import * as styles from './header.module.less';

export type HeaderProps = {
  title: string;
  icon: string;
};

export const Header = (props: HeaderProps) => {
  return (
    <header className={styles['header']}>
      <MaterialIcon className={styles['header-icon']} icon={props.icon} />
      {props.title}
    </header>
  );
};
