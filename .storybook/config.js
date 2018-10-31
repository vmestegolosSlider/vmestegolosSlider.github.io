import { configure, addDecorator } from '@storybook/vue';
import { checkA11y } from '@storybook/addon-a11y';

// https://storybook.js.org/basics/writing-stories/
const req = require.context('../src', true, /\.stories\.js$/);

// https://github.com/storybooks/storybook/tree/master/addons/a11y
addDecorator(checkA11y);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
