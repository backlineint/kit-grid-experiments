module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    {
      pattern: /hidden|flex/,
      variants: ['sm', 'md', 'lg', 'xl', '2xl'],
    },
  ],
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
