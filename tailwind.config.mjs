/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,md,svelte,ts}"],
	theme: {
		extend: {},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("daisyui")
	],
	daisyui: {
		themes: ["lemonade"],
	}
}
