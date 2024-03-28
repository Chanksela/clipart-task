/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				noto: ["Noto Sans Georgian", "sans-serif"],
			},
			fontSize: {
				"headline-1": "24px",
				"headline-2": "20px",
				"headline-mobile": "16px",
				"headline-3": "14px",
				text: "16px",
				"small-text": "12px",
			},
			lineHeight: {
				"headline-1": "40px",
				"headline-2": "28px",
				"headline-3": "20px",
				text: "24px",
				"small-text": "16px",
			},
			letterSpacing: {
				headline: "-0.35px",
				"headline-3": "-0.20px",
				text: "-0.5px",
				"small-text": "-0.20px",
			},
			colors: {
				primary: "#585EE3",
				"primary-light": "#F5F8FF",

				"black-900": "#000000",
				"black-700": "#1D2D35",
				"black-600": "#657178",
				"black-300": "#EFF4F5",
				white: "#FFFFFF",
			},
			boxShadow: {
				big: "0px 0px 40px 0px #00000014",
				small: "0px 0px 20px 0px #0000001A",
			},
		},
	},
};
