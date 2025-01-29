import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/*.{js,ts,jsx,tsx}",
		"./src/pages/**/*.{js,ts,jsx,tsx}",
	],
	plugins: [],
};

export default config;
