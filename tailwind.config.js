module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            sm: '576px',
            md: '768px',
            laptop: '1024px',
        },
        fontSize: {
            rem12: 12 / 16 + 'rem',
            rem14: 14 / 16 + 'rem',
            rem18: 18 / 16 + 'rem',
            rem24: 24 / 16 + 'rem',
            rem28: 28 / 16 + 'rem',
            rem32: 32 / 16 + 'rem',
            rem36: 36 / 16 + 'rem',
            rem48: 48 / 16 + 'rem',
            rem64: 64 / 16 + 'rem',
            rem72: 72 / 16 + 'rem',
            16: '16px',
            18: '18px',
        },
        fontWeight: {
            100: 100,
            200: 200,
            300: 300,
            400: 400,
            500: 500,
            600: 600,
            700: 700,
            800: 800,
            900: 900,
        },
        colors: {
            transparent: {
                DEFAULT: 'transparent',
            },
            black: {
                light: '#282c34',
                DEFAULT: '#000000',
            },
            white: {
                DEFAULT: '#ffffff',
            },
            blue: {
                light: '#bbeffd',
                DEFAULT: '#0167A1',
                dark: '',
            },
            grey: {
                light: '#FBFBFD',
                DEFAULT: '#6d6d6d',
                dark: '#282c34',
            },
            yellow: {
                DEFAULT: '#ffe564',
            },
            orange: {
                DEFAULT: '#ff6700',
            },
            red: {
                DEFAULT: '#ff0000',
            },
        },
        extend: {
            minWidth: {
                36: '36px',
            },
            width: {
                100: '25rem',
                105: '26.25rem',
                120: '30rem',
                130: '32.5rem',
                150: '37.5rem',
                160: '40rem',
                256: '64rem',
                260: '65rem',
                280: '70rem',
                '1/8': (1 / 8) * 100 + '%',
            },
            maxWidth: {
                92: '92%',
                1280: '1280px',
            },
            height: {
                28: '7rem',
                135: '33.75rem',
                180: '45rem',
                220: '55rem',
                288: '72rem',
            },
            padding: {
                15: '3.75rem',
                38: '9.5rem',
            },
            borderWidth: {
                DEFAULT: '1px',
                5: '5px',
                10: '10px',
                15: '15px',
                20: '20px',
            },
            keyframes: {
                wave: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(25px)' },
                },
            },
            animation: {
                'wave-loop': 'wave 4s ease-in-out infinite alternate',
            },
        },
    },
    variants: {
        extend: {
            fontWeight: ['responsive', 'group-hover'],
            padding: ['responsive', 'group-hover', 'hover'],
            borderWidth: ['responsive', 'group-hover'],
            scale: ['group-hover'],
        },
    },
    plugins: [],
};
