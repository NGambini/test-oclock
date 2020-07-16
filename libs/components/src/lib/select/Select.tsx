import React, { FC, useState } from 'react';
import MaterialIcon from '@material/react-material-icon';
import { animated, useSpring } from 'react-spring';
import { usePopper } from 'react-popper';
import classNames from 'classnames';

import styles from './select.module.less';

export type SelectProps = {
  placeholder?: string;
};

export const Select: FC<SelectProps> = ({ placeholder }) => {
  const [isOpened, setIsOpened] = useState(false);
  const iconRotationAngle = useSpring({
    transform: isOpened ? 'rotate(180deg)' : 'rotate(0deg)',
  });
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement);

  const handleOnClick = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div>
      <div
        ref={setReferenceElement}
        className={classNames(styles['container'])}
        onClick={handleOnClick}
      >
        {placeholder}

        <animated.div
          className={classNames(styles['iconContainer'])}
          style={iconRotationAngle}
        >
          <MaterialIcon icon="expand_more" />
        </animated.div>
      </div>
      {isOpened && (
        <div
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        >
          le popper <br />
          le popper <br />
          le popper <br />
          le popper <br />
          le popper <br />
          le popper <br />
          le popper <br />
          le popper <br />
        </div>
      )}
    </div>
  );
};
