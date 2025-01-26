import config from "./tailwind.config";

export default {
	plugins: {
		"@tailwindcss/postcss": {
			config: config,
		},
		autoprefixer: {},
	},
};
