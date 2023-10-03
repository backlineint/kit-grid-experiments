/** @type { import('@storybook/react').Preview } */
const customViewports = {
  default: {
    name: 'default',
    styles: {
      width: '450px',
      height: '100%',
    },
  },
  sm: {
    name: 'sm',
    styles: {
      width: '700px',
      height: '100%',
    },
  },
  md: {
    name: 'md',
    styles: {
      width: '900px',
      height: '100%',
    },
  },
  lg: {
    name: 'lg',
    styles: {
      width: '1100px',
      height: '100%',
    },
  },
  xl: {
    name: 'xl',
    styles: {
      width: '1400px',
      height: '100%',
    },
  },
  xxl: {
    name: 'xxl',
    styles: {
      width: '1850px',
      height: '100%',
    },
  },
};

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: { viewports: customViewports },
  },
};

export default preview;
