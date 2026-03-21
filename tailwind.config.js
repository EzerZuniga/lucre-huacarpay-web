/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wetland: {
          moss: '#5B6D3E',
          'moss-dark': '#3F4D2B',
          lagoon: '#2F7898',
          'lagoon-dark': '#1F5169',
          earth: '#B89563',
          sand: '#E8DDC8',
          ivory: '#F8F5EE',
          mist: '#DCE9E7',
          foam: '#FDFBF6',
          ink: '#233228',
          'ink-soft': '#4B5D51',
          cta: '#D79A2B',
          'cta-dark': '#AF7619',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui'],
        serif: ['Lora', 'ui-serif', 'Georgia'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
