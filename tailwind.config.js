const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './lib/**/*.{js,ts,jsx,tsx}'
    ],
    darkMode: ['class'],
    theme: {
        extend: {
            fontFamily: {},
            colors: {
                primary: colors.violet[700],
                primaryLight: colors.violet[500],
                primaryDark: colors.violet[900],
                secondary: colors.green[700],
                secondaryLight: colors.green[400],
                secondaryDark: colors.green[900],
                react: '#61dafb',
                laravel: '#ff2d20',
                vue: '#42b883'
            },
            screens: {
                'sm': '640px',
                'md': '768px',
                'lg': '1024px',
                'xl': '1280px',
                '2xl': '1536px',
                '3xl': '1920px',
                '4xl': '2048px',
                '5xl': '2560px',
                '6xl': '3840px'
            },
            dropShadow: ({theme}) => ({
                'light': `0 0px 10px rgba(0, 0, 0, 0.5)`,
                'dark': `0 0px 10px ${theme('colors.primary')}`,
                'react': `0 0px 10px ${theme('colors.react')}`,
                'laravel': `0 0px 10px ${theme('colors.laravel')}`,
                'vue': `0 0px 10px ${theme('colors.vue')}`,
                'next': `0 0px 10px #fff`,
                'primary': `0 0px 10px ${theme('colors.primary')}`,
                'secondary': `0 0px 10px ${theme('colors.secondaryLight')}`
            }),
            textShadow: ({theme}) => ({
                'react': `0 0 50px ${theme('colors.react')}`,
                'laravel': `0 0px 50px ${theme('colors.laravel')}`,
                'vue': `0 0px 50px ${theme('colors.vue')}`,
                'next': `0 0px 50px #fff`,
                'none': 'none'
            }),
            minWidth: {...defaultTheme.screens},
            maxWidth: {...defaultTheme.screens},
            width: {...defaultTheme.screens},
            minHeight: {
                'desktop': 'calc(100vh - 68px)',
                'between': 'calc(100vh - 68px - 44px)',
                'mobile': 'calc(100vh - 56px - 44px)'
            }
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        plugin(function ({matchUtilities, theme}) {
            matchUtilities(
                {
                    'text-shadow': (value) => ({
                        textShadow: value
                    })
                },
                {values: theme('textShadow')}
            );
        })
    ]
};