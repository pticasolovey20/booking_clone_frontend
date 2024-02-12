/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],

	theme: {
		extend: {
			screens: {
				xxs: '400px',
				xs: '550px',
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1200px',
				xxl: '1440px',
				xxxl: '1680px',
			},
		},
	},

	plugins: [],
};
