import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      }
      
    },
    colors: {
      "primary" : "#16FF00",
      "background": "#040e1a",
      "text": "#d8cee8",
      "secondary" : "#d8cee8",
      "accent": "#040e1a"
    }
  },
  plugins: [],
}
export default config
