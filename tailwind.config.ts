import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.{jpeg,jpg,svg,png}",
  ],
  theme: {
    container: {
      padding: { 
        DEFAULT: '15px',
      },
    },

    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1330px',
    },

    extend: {
      colors: {
        primary: '#242a2b',
        secondary: '#808080',
        accent: {
          DEFAULT: '#1cbccf',
          secondary: '#18abbc',
          tertiary: '#90c6cd',
        },
        grey: '#e8f0f1',
      },
      fontFamily: {
        primary: 'Poppins',
      },
      boxShadow: {
        custom1: '0px 2px 40px 0px rgba(8, 70, 78, 0.08)',
        custom2: '0px 0px 30px 0px rgba(8, 73, 81, 0.06)'
      },
      backgroundImage: {
        'services': "url('../../public/assets/img/services/bg.svg')",
        'testimonials': "url('../../public/assets/img/testimonials/bg.svg')",
        'departments': "url('../../public/assets/img/departments/bg.svg')",
        'qouteLeft': "url('../../public/assets/icons/testimonials/quote-left.svg')",
        'qouteRight': "url('../../public/assets/icons/testimonials/quote-right.svg')",
      }
    },
  },
  plugins: [
  ],
}
export default config;
