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
        // Balanced earth-tone color palette
        charcoal: {
          black: '#0A0908',
        },
        slate: {
          blue: '#22333B',
        },
        warm: {
          cream: '#F5F2ED', // Softer warm cream (not pure white)
          beige: '#C6AC8F',
        },
        dark: {
          brown: '#5E503F',
        },
        // Semantic color mapping - balanced earth tones
        primary: {
          DEFAULT: '#22333B', // Slate Blue 
          foreground: '#F5F2ED', // Warm cream instead of pure white
          hover: '#1A252B', // Darker slate blue
        },
        accent: {
          DEFAULT: '#C6AC8F', // Warm Beige 
          foreground: '#22333B', // Use slate blue instead of black
          hover: '#B8A082', // Slightly darker beige
        },
        background: {
          DEFAULT: '#F5F2ED', // Soft warm cream as primary background
          paper: '#FFFFFF', // Pure white for cards (creates nice contrast)
          muted: '#F0EDE7', // Slightly deeper warm tone for sections
        },
        foreground: {
          DEFAULT: '#22333B', // Use slate blue for primary text
          muted: '#5E503F', // Dark brown for secondary text
          subtle: '#8B7D6B', // Muted brown for subtle text
        },
        border: {
          DEFAULT: 'rgba(198, 172, 143, 0.3)', // Subtle beige borders
          muted: 'rgba(198, 172, 143, 0.15)', // Very light beige borders
          accent: 'rgba(34, 51, 59, 0.2)', // Subtle slate blue borders
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

