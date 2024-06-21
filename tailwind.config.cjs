/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  variants: {
    extend: {
      textColor: ['hover'],
    },
  },
  theme: {
    animatedSettings: {
      animatedSpeed: 1000,
      heartBeatSpeed: 500,
      hingeSpeed: 2000,
      bounceInSpeed: 750,
      bounceOutSpeed: 750,
      animationDelaySpeed: 500,
      classes: ['bounce', 'heartBeat', 'fadeInDown', 'fadeInUp', 'fadeOutDown'],
    },
    extend: {
      spacing: {
        'navbar-height': `var(--navbar-height)`
      },

      colors: {
        'gray1': '#717B8E',
        'gray2': "#3D475C",
        'gray3': "#161A22",
        'gray4': '#F5F7FA',
        'caption-gray': '#A8ADB8',
        'primary': '#6F49E8',
      },
      screens: {
        // sm: '640px',
        // md: '768px',
        lg: '1024px',
        // xl: '1920px',
        // xxl: '1930px',
        // '2xl': '2500px',
      },
      fontSize: {
        1: '0.25rem',
        1.5: '0.375rem',
        2: '0.5rem',
        2.5: '0.625rem',
        2.75: '0.6875rem',
        3: '0.75rem',
        3.25: '0.8125rem',
        3.5: '0.875rem',
        4: '1rem',
        4.5: '1.125rem',
        5: '1.25rem',
        5.5: '1.375rem',
      },
      borderRadius: {
        1: '0.25rem',
        1.5: '0.375rem',
        2: '0.5rem',
        2.5: '0.625rem',
        3: '0.75rem',
        3.5: '0.875rem',
        4: '1rem',
        4.5: '1.125rem',
        5: '1.25rem',
        5.5: '1.375rem',
      },
      lineHeight: {
        1: '0.25rem',
        1.5: '0.375rem',
        2: '0.5rem',
        2.5: '0.625rem',
        3: '0.75rem',
        3.5: '0.875rem',
        4: '1rem',
        4.5: '1.125rem',
        5: '1.25rem',
        5.5: '1.375rem',
      },
      borderWidth: {
        1: '1px',
        3: '3px',
        5: '5px',
      },

    },
  },
  plugins: [require('tailwindcss-animatecss')],

}
