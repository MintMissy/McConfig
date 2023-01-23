/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,ts}"],
	theme: {
		extend: {
			colors: {
				primary: require("tailwindcss/colors").indigo,
				accent: require("tailwindcss/colors").emerald,
				warn: require("tailwindcss/colors").amber,
				error: require("tailwindcss/colors").rose,
				light: require("tailwindcss/colors").cyan,
				dark: require("tailwindcss/colors").slate,
				semiblack: {
					900: "#010107",
					800: "#04040C",
					700: "#0D0E1B",
					600: "#070711",
					500: "#0A0B16",
					400: "#101120",
					300: "#131425",
				},
			},
		},
	},
	plugins: [],
};
