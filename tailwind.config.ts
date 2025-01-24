
import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/pages/components/**/*.{js,ts,jsx,tsx}",
        "./src/pages/layouts/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            sans: ['"Inter"', '"sans-serif"'],
        },
    },
    plugins: []
}

export default config