/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
			  display: ["Work Sans", ...defaultTheme.fontFamily.sans],
			  body: ["Open Sans", ...defaultTheme.fontFamily.sans],
			},
			colors: {
			  transparent: "transparent",
			  current: "currentColor",
			  primary: {
				// Teal
				coderight: {
				  /* lighter: "#91E7E7", */
				  DEFAULT: "#58838C",
				  darker: "#46686D",
				},
			  },
			  secondary: {
				// Light Grey
				coderight: {
					DEFAULT: "#F0F2F2",
				},
			  },
			  "accent-primary": {
				// Red
				coderight: {
					DEFAULT: "#D97179",
					darker: '#AD4B57',
				},
			  },
			  "accent-secondary": {
				// LightPink
				coderight: {
				  DEFAULT: "#D9B8B8",
				  darker: '#BA9191',
				},
			  },
			  black: {
				coderight: {
				  DEFAULT: "#0D0D0D",
				},
			  },
			},
		  },
	},
	/* plugins: [require('daisyui')] */
};
