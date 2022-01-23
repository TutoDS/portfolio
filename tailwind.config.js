const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	darkMode: 'class',
	mode: 'jit',
	content: ['./src/**/*.{jsx,tsx,ts,js}', './**/*.html'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Poppins"', 'sans-serif'],
				serif: ['"Playfair Display"', 'serif']
			},
			colors: {
				primary: {
					'50': '#f4f6f8',
					'100': '#e9ecf1',
					'200': '#c7d0dc',
					'300': '#a5b3c7',
					'400': '#627a9e',
					'500': '#1e4174',
					'600': '#1b3b68',
					'700': '#173157',
					'800': '#122746',
					'900': '#0f2039'
				},
				secondary: {
					'50': '#fdfbf6',
					'100': '#fcf6ed',
					'200': '#f7ead2',
					'300': '#f2ddb7',
					'400': '#e9c380',
					'500': '#dfa94a',
					'600': '#c99843',
					'700': '#a77f38',
					'800': '#86652c',
					'900': '#6d5324'
				}
			}
		}
	},
	variants: {},
	plugins: [require('tailwindcss'), require('precss'), require('autoprefixer')]
};