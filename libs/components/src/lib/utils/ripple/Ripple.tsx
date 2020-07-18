import React, { useState, useLayoutEffect, FC } from 'react';

import styles from './ripple.module.less';

const useDebouncedRippleCleanUp = (
  rippleCount: number,
  duration: number,
  cleanUpFunction: () => void
) => {
  // called synchronously after all DOM mutations compared to useEffect
  useLayoutEffect(() => {
    let bounce = null;
    if (rippleCount > 0) {
      clearTimeout(bounce);
      bounce = setTimeout(() => {
        cleanUpFunction();
        clearTimeout(bounce);
      }, duration * 4);
    }

    return () => clearTimeout(bounce);
  }, [rippleCount, cleanUpFunction]);
};

export type RippleProps = {
  duration?: number;
};

export const Ripple: FC<RippleProps> = ({ duration }) => {
  const [rippleArray, setRippleArray] = useState([]);

  useDebouncedRippleCleanUp(rippleArray.length, duration, () => {
    setRippleArray([]);
  });

  const addRipple = (event: React.MouseEvent) => {
    const rippleContainer = event.currentTarget.getBoundingClientRect() as DOMRect;
    const size =
      rippleContainer.width > rippleContainer.height
        ? rippleContainer.width
        : rippleContainer.height;
    const x = event.pageX - rippleContainer.x - size / 2;
    const y = event.pageY - rippleContainer.y - size / 2;
    const newRipple = {
      x,
      y,
      size,
    };

    setRippleArray((prevState) => [...prevState, newRipple]);
  };

  return (
    <div onClick={addRipple} className={styles['rippleContainer']}>
      {rippleArray.length > 0 &&
        rippleArray.map((ripple, index) => {
          return (
            <span
              key={'span' + index}
              style={{
                top: ripple.y,
                left: ripple.x,
                width: ripple.size,
                height: ripple.size,
                animationDuration: `${duration.toString()}ms`,
              }}
            />
          );
        })}
    </div>
  );
};

Ripple.defaultProps = {
  duration: 1000,
};
