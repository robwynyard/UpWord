/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Earth Tone Color Palette from color_scheme.html
        charcoal: {
          black: '#0A0908',
        },
        slate: {
          blue: '#22333B',
        },
        warm: {
          cream: '#EAE0D5',
          beige: '#C6AC8F',
        },
        dark: {
          brown: '#5E503F',
        },
        // Semantic color mapping
        primary: {
          DEFAULT: '#22333B', // Slate Blue
          foreground: '#FFFFFF',
          hover: '#5E503F',
        },
        accent: {
          DEFAULT: '#C6AC8F', // Warm Beige
          foreground: '#0A0908',
          hover: '#5E503F',
        },
        background: {
          DEFAULT: '#EAE0D5', // Warm Cream
          paper: '#FFFFFF',
        },
        foreground: {
          DEFAULT: '#0A0908', // Charcoal Black
          muted: '#22333B',
          subtle: '#5E503F',
        },
        border: {
          DEFAULT: '#C6AC8F',
          muted: 'rgba(198, 172, 143, 0.3)',
        },
        ring: '#22333B',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'earth': '0 4px 20px rgba(10, 9, 8, 0.08)',
        'earth-lg': '0 8px 30px rgba(34, 51, 59, 0.12)',
        'earth-xl': '0 8px 25px rgba(34, 51, 59, 0.3)',
      },
      backgroundImage: {
        'earth-gradient': 'linear-gradient(135deg, #22333B 0%, #5E503F 100%)',
        'earth-hero': 'linear-gradient(135deg, #0A0908 0%, #22333B 50%, #5E503F 100%)',
        'accent-gradient': 'linear-gradient(135deg, #C6AC8F 0%, #5E503F 100%)',
      },
    },
  },
  plugins: [],
}

