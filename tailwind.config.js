const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'grid-pattern': "linear-gradient(to bottom, theme('colors.neutral.950 / 0%'), theme('colors.neutral.950 / 100%')), url('/images/noise.png')"
            },
            colors: {
                neutral: colors.neutral,
                gold: {
                    DEFAULT: '#CEA55D',
                    light: '#D4AF61',
                },
                dark: {
                    DEFAULT: '#1A1A1A',
                    deeper: '#111111',
                },
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                'playfair': ['"Playfair Display"', 'serif'],
                'inter': ['Inter', 'sans-serif'],
            },
            boxShadow: {
                'premium': '0 4px 20px rgba(206, 165, 93, 0.1)',
            }
        }
    },
    daisyui: {
        themes: [
            {
                lofi: {
                    ...require('daisyui/src/theming/themes')['lofi'],
                    primary: '#2bdcd2',
                    'primary-content': '#171717',
                    secondary: '#016968',
                    info: '#2bdcd2',
                    'info-content': '#171717',
                }
            }
        ]
    },
    plugins: [require('daisyui')]
};
