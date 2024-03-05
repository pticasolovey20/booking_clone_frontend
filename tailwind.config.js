/** @type {import('tailwindcss').Config} */

module.exports = {
	darkMode: ['class'],

	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],

	theme: {
		extend: {
			screens: {
				xs: '400px',
				sm: '576px',
				md: '768px',
				lg: '992px',
				xl: '1200px',
				xxl: '1400px',
			},

			colors: {
				primary: {
					DEFAULT: 'hsla(var(--primary))',
				},

				secondary: {
					DEFAULT: 'hsla(var(--secondary))',
				},

				tertiary: {
					DEFAULT: 'hsla(var(--tertiary))',
					foreground: 'hsla(var(--tertiary-foreground))',
				},

				accent: {
					DEFAULT: 'hsla(var(--accent))',
				},
			},

			borderColor: {
				DEFAULT: 'hsla(var(--border))',
				separator: 'hsla(var(--border-separator))',
			},

			backgroundImage: {
				accentGradient: 'linear-gradient(to right, #E61E4D 0%, #E31C5F 50%, #D70466 100%)',
			},
		},
	},

	prefix: '',
	plugins: [require('tailwindcss-animate')],
};
