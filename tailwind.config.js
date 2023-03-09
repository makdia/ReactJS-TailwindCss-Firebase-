module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'small': {'min': '640px', 'max': '767px'},
        'tb': {'max': '1023px'},
        'tb-landscape': {'max': '1024px'},
      },
      colors: {
          red: {
            light: '#EF6063'
          },
          purple: {
            bright: '#6B68D4'
          },
          blue: {
            bright: '#91C7FD'
          },
          gray: {
            light: '#777676',
            lightest : '#BDBDBD'
          },
          green: {
            light: '#F5F8FE'
          }
      },
      backgroundImage: {
        //'banner': 'url("/img/banner/bg-banner.png")',
        //'we-love': 'url("/img/banner/about-banner.png")'
      },
      fontSize: {
        '9xl': ['54px', {
          letterSpacing: '0.2px',
          lineHeight: '68px',
        }],
        '8xl': ['36px', {
          letterSpacing: '0.1px',
          lineHeight: '46px',
        }],
        '7xl': ['30px', {
          letterSpacing: '0.1px',
          lineHeight: '42px',
        }],
        'subtitle1': ['20px', {
          letterSpacing: '0.1px',
          lineHeight: '24px',
        }],
        'subtitle2': ['14px', {
          letterSpacing: '0.1px',
          lineHeight: '18px',
        }],
        'body1': ['24px', {
          letterSpacing: '0.2px',
          lineHeight: '30px',
        }],
        'body2': ['18px', {
          letterSpacing: '0.2px',
          lineHeight: '24px',
        }],
        'small1': ['16px', {
          letterSpacing: '0px',
          lineHeight: '21px',
        }],
        'small2': ['18px', {
          letterSpacing: '0.2px',
          lineHeight: '21px',
        }],
        'link': ['18px', {
          letterSpacing: '0.2px',
          lineHeight: '30px',
        }],
        'button': ['16px', {
          letterSpacing: '0.2px',
          lineHeight: '22px',
        }],
        'initials': ['14px', {
          letterSpacing: '0.1px',
          lineHeight: '18px',
        }],
      },
      fontFamily: {
        'sans': ['Helvetica Neue', 'Arial'],
        'serif': ['Helvetica'],
        'mono': ['monospace'],
        'display': ['Arial Rounded MT Bold'],
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': '100% 100%',
      },
      height: {
       px: '750px'
      }
    },
  },
  variants: {
    extend: {
      fill: ['focus', 'hover']
    },
  },
  plugins: [],
}