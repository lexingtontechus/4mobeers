const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{html,js}',
    './components/**/*.{html,js,jsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'

  backgroundImage: {
    'profile-pattern':
      "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
    'footer-texture': "url('/img/footer-texture.png')",
  },
  theme: {
    extend: {
      animation: {
        'gradient-1': 'animate-gradient-1 5s infinite',
        'gradient-2': 'animate-gradient-2 5s infinite',
        'gradient-3': 'animate-gradient-3 5s infinite',
        linear: 'backgroundLinear 3s linear infinite',
        wiggle: '4s linear infinite wiggle',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(20deg)' },
        },
        backgroundLinear: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        'animate-gradient-1': {
          '0%, 16.667%, 100%': { opacity: '1' },
          '33.333%, 83.333%': { opacity: '0' },
        },
        'animate-gradient-2': {
          '0%, 16.667%, 66.667%, 100%': { opacity: '0' },
          '33.333%, 50%': { opacity: '1' },
        },
        'animate-gradient-3': {
          '0%, 50%,  100%': { opacity: '0' },
          '66.667%, 83.333%': { opacity: '1' },
        },
      },
      colors: {
        trueGray: colors.gray,
        trueAmber: colors.amber,
        trueOrange: colors.orange,
        trueSky: colors.sky,
        trueRed: colors.red,
        truePurple: colors.purple,
        trueZinc: colors.zinc,
        trueEmerald: colors.emerald,
        trueBlue: colors.blue,
        truePink: colors.pink,
        trueFuchsia: colors.fuchsia,
      },
    },
    fontFamily: {
      sans: ['Sora', ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('daisyui'),
    require('prettier-plugin-tailwindcss'),
  ],
  daisyui: {
    themes: [
      'dracula',
      'cyberpunk',
      {
        mytheme: {
          primary: '#18181b', //zinc900
          'primary-content': '#18181b', //zinc900
          secondary: '#a21caf', //fuchsia700
          'secondary-content': '#3f3f46', //zinc700
          accent: '#0ea5e9', //sky500
          neutral: '#737373', //neutral500
          'base-100': '#71717a', //zinc500
          info: '#3abff8',
          success: '#36d399',
          warning: '#fbbf24',
          error: '#b91c1c',
          'base-100': '#1f2937',
        },
      },
    ], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: 'dracula', // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
};
