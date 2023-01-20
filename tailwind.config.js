/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		fontFamily: {
			primary: 'Playfair Display',
			secondary: 'Lato',
		},
		container: {
			padding: {
				DEFAULT: '10px',
				// lg: '0',
			},
		},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1200px',
		},
		extend: {
			colors: {
				body: '#e5e5e5',
				dark: '#0a0909',
				grey: {
					DEFAULT: '#777876',
					100: '#e4e4e3',
				},
				accent: {
					DEFAULT: '#fe7634',
					hover: '#F55304',
				},
			},
			backgroundImage: {
				pattern: "url('public/body-bg-pattern.png')",
				hero: "url('/public/hero/bg.png')",
				menu: "url('./public/menu/bg.png')",
				testimonial: "url('./public/testimonial/bg.png')",
				newsletter: "url('./public/newsletter/bg.png')",
				footer: "url('./public/footer/bg.png')",
			},
		},
	},
	plugins: [],
};
