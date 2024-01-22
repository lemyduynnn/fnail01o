import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  darkMode: 'class',
  content: [
    'docs/content/**/*.md'
  ],
  theme: {
    extend: {
      screens: {
        '2sm': '580px',
        '2md': '1000px',
        '3md': '820px',
        '2lg': '1140px',
        '2xl': '1220px',
        '4md': '872px'
      },
      fontFamily: {
        yellowtail: ['Yellowtail'],
        rubik: ['Rubik Mono One'],
        century: ['Century Gothic'],
        centuryb: ['Century Gothic Bold']
      },
      container: {
        center: true,
        screens: {
          xl: '1140px'
        }
      },
      colors: {
        main: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        white: 'var(--color-white)'
      },
      fontSize: {
        sm: '16px'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ]
};
