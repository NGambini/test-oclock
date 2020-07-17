import React from 'react';
import MaterialIcon from '@material/react-material-icon';

import * as styles from './option.module.less';

export type OptionProps = {
  name: string;
  key: string;
  onClick: (key) => void;
};

export const Option = (props: OptionProps) => {
  // binding the param allows us to avoid declaring an arrow function
  return (
    <div
      className={styles['option']}
      onClick={props.onClick.bind(this, props.key)}
    >
      {name}
    </div>
  );
};
