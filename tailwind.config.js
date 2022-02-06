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
					50: '#f4f6f8',
					100: '#e9ecf1',
					200: '#c7d0dc',
					300: '#a5b3c7',
					400: '#627a9e',
					500: '#1e4174',
					600: '#1b3b68',
					700: '#173157',
					800: '#122746',
					900: '#0f2039'
				},
				secondary: {
					50: '#fdfbf6',
					100: '#fcf6ed',
					200: '#f7ead2',
					300: '#f2ddb7',
					400: '#e9c380',
					500: '#dfa94a',
					600: '#c99843',
					700: '#a77f38',
					800: '#86652c',
					900: '#6d5324'
				}
			},

			animation: {
				type: 'type 2s ease-out .8s alternate both'
			},
			keyframes: {
				type: {
					'0%': {
						transform: 'translateX(0%)'
					},
					'5%, 10%': {
						transform: 'translateX(10%)'
					},
					'15%, 20%': {
						transform: 'translateX(20%)'
					},
					'25%, 30%': {
						transform: 'translateX(30%)'
					},
					'35%, 40%': {
						transform: 'translateX(40%)'
					},
					'45%, 50%': {
						transform: 'translateX(50%)'
					},
					'55%, 60%': {
						transform: 'translateX(60$)'
					},
					'65%, 70%': {
						transform: 'translateX(70%)'
					},
					'75%, 80%': {
						transform: 'translateX(80%)'
					},
					'85%, 90%': {
						transform: 'translateX(90%)'
					},
					'95%, 100%': {
						transform: 'translateX(100%)'
					}
				}
			},

			container: {
				center: true,

				screens: {
					xl: '1280px',
					'2xl': '1280px'
				}
			}
		}
	},
	variants: {},
	plugins: [
		require('tailwindcss'),
		require('precss'),
		require('autoprefixer')
	]
};
