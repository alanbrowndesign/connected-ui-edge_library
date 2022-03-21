export const twTypeStyles = {
    ".text-hero": {
        fontSize: "var(--fontSizes-7)",
        lineHeight: "var(--lineHeights-tight)",
        fontFamily: "var(--fonts-display)",
        fontWeight: "var(--fontWeights-heavy)",
        letterSpacing: "var(--letterSpacings-tighter)",
    },
    ".text-headline": {
        fontSize: "var(--fontSizes-6)",
        lineHeight: "var(--lineHeights-tight)",
        fontFamily: "var(--fonts-display)",
        fontWeight: "var(--fontWeights-heavy)",
        letterSpacing: "var(--letterSpacings-tighter)",
    },
    ".text-title1": {
        fontSize: "var(--fontSizes-5)",
        lineHeight: "var(--lineHeights-tight)",
        fontFamily: "var(--fonts-display)",
        fontWeight: "var(--fontWeights-heavy)",
        letterSpacing: "var(--letterSpacings-tight)",
    },
    ".text-title2": {
        fontSize: "var(--fontSizes-4)",
        lineHeight: "var(--lineHeights-tight)",
        fontFamily: "var(--fonts-display)",
        fontWeight: "var(--fontWeights-heavy)",
        letterSpacing: "var(--letterSpacings-tight)",
    },
    ".text-title3": {
        fontSize: "var(--fontSizes-3)",
        lineHeight: "var(--lineHeights-tight)",
        fontFamily: "var(--fonts-display)",
        fontWeight: "var(--fontWeights-heavy)",
        letterSpacing: "var(--letterSpacings-tight)",
    },
    ".text-heading": {
        fontSize: "var(--fontSizes-2)",
        lineHeight: "var(--lineHeights-tight)",
        fontFamily: "var(--fonts-display)",
        fontWeight: "var(--fontWeights-heavy)",
        letterSpacing: "var(--letterSpacings-tight)",
    },
    ".text-subhead": {
        fontSize: "var(--fontSizes-1)",
        fontFamily: "var(--fonts-display)",
        fontWeight: "var(--fontWeights-heavy)",
        letterSpacing: "var(--letterSpacings-normal)",
    },
    ".text-body": {
        fontSize: "var(--fontSizes-0)",
        fontFamily: "var(--fonts-text)",
        letterSpacing: "var(--letterSpacings-normal)",
    },
    ".text-footnote": {
        fontSize: "var(--fontSizes--1)",
        fontFamily: "var(--fonts-text)",
        letterSpacing: "var(--letterSpacings-wide)",
    },
    ".text-caption": {
        fontSize: "var(--fontSizes--2)",
        fontFamily: "var(--fonts-text)",
    },
    ".text-micro": {
        fontSize: "var(--fontSizes--3)",
        fontFamily: "var(--fonts-text)",
    },
};

export const twTheme = {
    colors: {
        transparent: "transparent",
        primary: {
            brand: "var(--colors-primaryBrand)",
            midnight: "var(--colors-primaryMidnight)",
        },
        neutral: {
            100: "var(--colors-neutral100)",
            200: "var(--colors-neutral200)",
            300: "var(--colors-neutral300)",
            400: "var(--colors-neutral400)",
            500: "var(--colors-neutral500)",
            600: "var(--colors-neutral600)",
            700: "var(--colors-neutral700)",
            800: "var(--colors-neutral800)",
            900: "var(--colors-neutral900)",
        },
        midnight: {
            100: "var(--colors-midnight100)",
            300: "var(--colors-midnight300)",
            500: "var(--colors-midnight500)",
            700: "var(--colors-midnight700)",
            900: "var(--colors-midnight900)",
        },
    },
    fontSize: {
        "-3": "var(--step--3)",
        "-2": "var(--step--2)",
        "-1": "var(--step--1)",
        0: "var(--step-0)",
        1: "var(--step-1)",
        2: "var(--step-2)",
        3: "var(--step-3)",
        4: "var(--step-4)",
        5: "var(--step-5)",
        6: "var(--step-6)",
        7: "var(--step-7)",
    },
    fontFamily: {
        display: "var(--fonts-display)",
        text: "var(--fonts-text)",
        sans: "var(--fonts-text)",
    },
    lineHeight: {
        DEFAULT: "var(--lineHeights-normal)",
        tighter: "var(--lineHeights-xtight)",
        tight: "var(--lineHeights-tight)",
        normal: "var(--lineHeights-normal)",
        wide: "var(--lineHeights-loose)",
    },
    fontWeight: {
        DEFAULT: "var(--fontWeights-standard)",
        standard: "var(--fontWeights-standard)",
        heavy: "var(--fontWeights-heavy)",
    },
    letterSpacing: {
        tightest: "var(--letterSpacings-tightest)",
        tighter: "var(--letterSpacings-tighter)",
        tight: "var(--letterSpacings-tight)",
        normal: "var(--letterSpacings-normal)",
        wide: "var(--letterSpacings-wide)",
        wider: "var(--letterSpacings-wider)",
        widest: "var(--letterSpacings-widest)",
    },
    spacing: {
        0: "0rem",
        0.5: "0.25rem", // 4px
        1: "0.5rem", // 8px
        2: "1rem", // 16px
        3: "1.5rem", // 24px
        4: "2rem", // 32px
        5: "2.5rem", // 40px
        6: "3rem", // 48px
        7: "3.5rem", // 56px
        8: "4rem", // 64px
        9: "4.5rem", // 72px
        10: "10rem", // 80px
    },
    screens: {
        xs: "0",
        sm: "48rem", // 768
        md: "64rem", // 1024
        lg: "80rem", // 1280
        xl: "90rem", // 1440
    },
    extend: {},
};
