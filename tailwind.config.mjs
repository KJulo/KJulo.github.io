/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
				'slide-left': {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(-100%)' },
				},
			},
			animation: {
				'slide-left': 'slide-left 10s linear infinite',
			},
		},
	},
	darkMode: 'selector',
	plugins: [],
}
