import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{html,js,ts,svelte}'],
  theme: {
    colors: {
      'lime-green': 'hsl(163, 72%, 41%)',
      'bright-red': 'hsl(356, 69%, 56%)',
      'facebook-blue': 'hsl(208, 92%, 53%)',
      'twitter-blue': 'hsl(203, 89%, 53%)',
      'instagram-1': 'hsl(37, 97%, 70%)',
      'instagram-2': 'hsl(329, 70%, 58%)',
      'youtube-red': 'hsl(348, 97%, 39%)',
      white: 'hsl(0, 0%, 100%)',
      blue: 'hsl(210, 78%, 56%)',
      green: 'hsl(146, 68%, 55%)',
      'very-pale-blue': 'hsl(225, 100%, 98%)',
      'light-grayish-blue': 'hsl(227, 47%, 96%)',
      'dark-grayish-blue': 'hsl(228, 12%, 44%)',
      'very-dark-blue-1': 'hsl(230, 17%, 14%)',
      'very-dark-blue-2': 'hsl(232, 19%, 15%)',
      'dark-desaturated-blue': 'hsl(228, 28%, 20%)',
      'desaturated-blue': 'hsl(228, 34%, 66%)',
    },
    fontFamily: {
      inter: ['Inter', ...defaultTheme.fontFamily.sans],
    },
  },
};
