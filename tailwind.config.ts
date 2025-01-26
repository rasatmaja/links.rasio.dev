
import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/pages/components/**/*.{js,ts,jsx,tsx}",
        "./src/pages/layouts/**/*.{js,ts,jsx,tsx}",
    ],
    plugins: []
}

export default config