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
        // Minimal color palette with earth-tone accents
        charcoal: {
          black: '#0A0908',
        },
        slate: {
          blue: '#22333B',
        },
        warm: {
          cream: '#FEFEFE',
          beige: '#C6AC8F',
        },
        dark: {
          brown: '#5E503F',
        },
        // Semantic color mapping - minimal white-based
        primary: {
          DEFAULT: '#22333B', // Slate Blue (for accents)
          foreground: '#FFFFFF',
          hover: '#5E503F',
        },
        accent: {
          DEFAULT: '#C6AC8F', // Warm Beige (subtle accent)
          foreground: '#0A0908',
          hover: '#5E503F',
        },
        background: {
          DEFAULT: '#FFFFFF', // Pure white primary background
          paper: '#FEFEFE', // Slightly off-white for cards
          muted: '#F8F9FA', // Very light gray for sections
        },
        foreground: {
          DEFAULT: '#1A1A1A', // Softer black for better readability
          muted: '#6B7280', // Medium gray
          subtle: '#9CA3AF', // Light gray
        },
        border: {
          DEFAULT: '#E5E7EB', // Light gray borders
          muted: '#F3F4F6', // Very light borders
          accent: 'rgba(198, 172, 143, 0.2)', // Subtle earth-tone borders
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

