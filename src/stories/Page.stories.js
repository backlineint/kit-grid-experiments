import { within, userEvent } from '@storybook/testing-library';

import { Page } from './Page';

export default {
  title: 'Layout/Page',
  component: Page,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export const Default = {};
