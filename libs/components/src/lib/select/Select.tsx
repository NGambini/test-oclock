import React, { FC, useState } from 'react';
import MaterialIcon from '@material/react-material-icon';
import { animated, useSpring } from 'react-spring';
import { usePopper } from 'react-popper';
import type { ModifierArguments, Options } from '@popperjs/core';
import classNames from 'classnames';

import { Option } from './option/Option';

import * as cssStyles from './select.module.less'; // different name to avoid collision with popper.js

export type SelectProps = {
  placeholder?: string;
};

const sameWidthModifier = (data: ModifierArguments<Options>) => {
  data.state.styles.popper.width = `${data.state.rects.reference.width}px`;
};

export const Select: FC<SelectProps> = ({ placeholder }) => {
  const [isOpened, setIsOpened] = useState(false);
  const iconRotationAngle = useSpring({
    transform: isOpened ? 'rotate(180deg)' : 'rotate(0deg)',
  });
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'bottom-start',
    /* see here for details about resizing and placement
      https://github.com/popperjs/popper-core/issues/794#issuecomment-589253942 */
    modifiers: [
      {
        name: 'sameWidth',
        enabled: true,
        fn: sameWidthModifier,
        phase: 'beforeWrite',
        requires: ['computeStyles'],
      },
    ],
  });

  const handleOnClick = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div>
      <div
        ref={setReferenceElement}
        className={cssStyles['container']}
        onClick={handleOnClick}
      >
        {placeholder}

        <animated.div
          className={cssStyles['iconContainer']}
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
          <Option name="lol" key="lol" onClick={() => null} />
          <Option name="lol" key="lol" onClick={() => null} />
          <Option name="lol" key="lol" onClick={() => null} />
          <Option name="lol" key="lol" onClick={() => null} />
          <Option name="lol" key="lol" onClick={() => null} />
          <Option name="lol" key="lol" onClick={() => null} />
          <Option name="lol" key="lol" onClick={() => null} />
        </div>
      )}
    </div>
  );
};
