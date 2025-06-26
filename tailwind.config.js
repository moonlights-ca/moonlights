/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          pink: '#ff0080',
          purple: '#8000ff',
          blue: '#0080ff',
          cyan: '#00ffff',
          green: '#00ff80',
        },
        dark: {
          900: '#0a0a0a',
          800: '#1a1a1a',
          700: '#2a2a2a',
          600: '#3a3a3a',
        }
      },
      fontFamily: {
        sans: ['system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        glow: {
          '0%': { 
            boxShadow: '0 0 5px #ff0080, 0 0 10px #ff0080, 0 0 15px #ff0080',
            textShadow: '0 0 10px #ff0080'
          },
          '100%': { 
            boxShadow: '0 0 10px #ff0080, 0 0 20px #ff0080, 0 0 30px #ff0080',
            textShadow: '0 0 20px #ff0080'
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
