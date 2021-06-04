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
            rem36: 36 / 16 + 'rem',
            rem48: 48 / 16 + 'rem',
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
        borderWidth: {
            DEFAULT: '1px',
        },
        extend: {
            width: {
                105: '26.25rem',
                256: '64rem',
                '1/8': (1 / 8) * 100 + '%',
            },
            maxWidth: {
                92: '92%',
                1280: '1280px',
            },
            height: {
                28: '7rem',
                180: '45rem',
            },
            padding: {
                15: '3.75rem',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
