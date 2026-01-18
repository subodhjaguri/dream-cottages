/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2D5A27',
          50: '#E8F5E7',
          100: '#D1EBD0',
          200: '#A3D7A0',
          300: '#75C371',
          400: '#47AF41',
          500: '#2D5A27',
          600: '#264D21',
          700: '#1E3A1E',
          800: '#172D17',
          900: '#0F1F0F',
        },
        secondary: {
          DEFAULT: '#1E3A1E',
          50: '#E5EDE5',
          100: '#CCDCCC',
          200: '#99B999',
          300: '#669666',
          400: '#427342',
          500: '#1E3A1E',
          600: '#1A3219',
          700: '#152914',
          800: '#10200F',
          900: '#0B170A',
        },
        accent: {
          DEFAULT: '#D4A84B',
          50: '#FCF8F0',
          100: '#F9F1E1',
          200: '#F2E3C3',
          300: '#ECD5A5',
          400: '#E5C787',
          500: '#D4A84B',
          600: '#C4933A',
          700: '#9E762F',
          800: '#785923',
          900: '#523D18',
        },
        dark: '#1A1A1A',
        light: '#F5F5F0',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
