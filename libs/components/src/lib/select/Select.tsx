import React, { FC, useState } from 'react';
import MaterialIcon from '@material/react-material-icon';
import { animated, useSpring } from 'react-spring';
import { usePopper } from 'react-popper';
import type { ModifierArguments, Options } from '@popperjs/core';
import { ClickAwayListener } from '@material-ui/core';
import classNames from 'classnames';

import { Option } from './option/Option';

import * as cssStyles from './select.module.less'; // different name to avoid collision with popper.js

export type SelectProps = {
  placeholder?: string;
  value: string;
  options: { key: string; name: string }[];
  onChange: (key: string) => void;
};

const sameWidthModifier = (data: ModifierArguments<Options>) => {
  data.state.styles.popper.width = `${data.state.rects.reference.width}px`;
};

export const Select: FC<SelectProps> = ({
  placeholder,
  options,
  value,
  onChange,
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const iconRotationAngle = useSpring({
    transform: isOpened ? 'rotate(180deg)' : 'rotate(0deg)',
  });
  const popperHeight = useSpring({ height: isOpened ? '300px' : '0' }); // todo get actual popper height
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
        className={classNames(cssStyles['select'], {
          [cssStyles['select-active']]: isOpened,
          [cssStyles['select-placeholder']]: !value,
        })}
        onClick={handleOnClick}
      >
        <div>
          {(value && options.find((o) => o.key === value).name) || placeholder}
        </div>

        <animated.div
          className={cssStyles['iconContainer']}
          style={iconRotationAngle}
        >
          <MaterialIcon icon="expand_more" />
        </animated.div>
      </div>
      {isOpened && (
        <ClickAwayListener onClickAway={() => setIsOpened(!isOpened)}>
          <div
            ref={setPopperElement}
            style={styles.popper}
            className={cssStyles['popper']}
            {...attributes.popper}
          >
            <animated.div style={popperHeight}>
              <div className={cssStyles['scroll-area']}>
                {options.map((o) => (
                  <Option
                    active={o.key === value}
                    value={o.key}
                    label={o.name}
                    onClick={(key: string) => {
                      onChange(key);
                      setTimeout(() => setIsOpened(false), 75); //wait a bit before closing for better feedback
                    }}
                  />
                ))}
              </div>
              <div className={cssStyles['popper-end']} />
            </animated.div>
          </div>
        </ClickAwayListener>
      )}
    </div>
  );
};
