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
				text: "-0.02em",
				"small-text": "-0.02em",
			},
		},
	},
};
