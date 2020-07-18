import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

// global UI styles
import '../src/ui.less';

addDecorator(withKnobs);
configure(require.context('../src/lib', true, /\.stories\.(j|t)sx?$/), module);
