/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primario: 'var(--primario)',
				acento: 'var(--acento)',
				'texto-str': 'var(--textostr)',
				'texto-sft': 'var(--textostr)',
				'ola-color': 'var(--ola-color)',
				'fondo-jr': 'var(--fondo-jr)',
				fondo: 'var(--fondo)',
			},
			backgroundImage: {
				/* ola: "url('/src/assets/img/oladay.png')", */
				ola: 'var(--ola)',
			},

			keyframes: {
				ola: {
					'0%': {
						backgroundPositionX: 0,
					},
					'100%': {
						backgroundPositionX: '1360px',
					},
				},
				cereal: {
					'0%': {
						transform: 'translateY(0)',
					},
					'25%': {
						transform: 'translateY(3%)',
					},
					'50%': {
						transform: 'translateY(0)',
					},
					'75%': {
						transform: 'translateY(-3%)',
					},
					'100%': {
						transform: 'translateY(0)',
					},
				},
			},
			animation: {
				ola: 'ola 10s linear infinite',
				'ola-jr': 'ola 10s linear infinite reverse',
				'ola-slow': 'ola 20s linear infinite',
				cereal: 'cereal linear 3s infinite',
			},
		},
	},
	plugins: [],
};
