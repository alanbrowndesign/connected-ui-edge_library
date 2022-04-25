import { defaultThemeMap } from "@stitches/react";

import {
    slate,
    slateDark,
    slateA,
    amber,
    amberDark,
    red,
    redDark,
    plum,
    plumDark,
    indigo,
    indigoDark,
    blue,
    blueDark,
    sky,
    skyDark,
    teal,
    tealDark,
    green,
    greenDark,
    orange,
    orangeDark,
    slateDarkA,
} from "@radix-ui/colors";

export const stitchesThemeMap = {
    // Map these properties to the `space` scale
    ...defaultThemeMap,
    width: "space sizes",
    height: "space sizes",
    spaceX: "space",
    spaceY: "space",
};

type TypeStyles =
    | "hero"
    | "headline"
    | "title1"
    | "title2"
    | "title3"
    | "heading"
    | "subhead"
    | "body"
    | "footnote"
    | "caption"
    | "micro";

export const stitchesUtils = {
    mx: (value: string | number) => ({
        marginLeft: value,
        marginRight: value,
    }),
    my: (value: string | number) => ({
        marginTop: value,
        marginBottom: value,
    }),

    px: (value: string | number) => ({
        paddingLeft: value,
        paddingRight: value,
    }),
    py: (value: string | number) => ({
        paddingTop: value,
        paddingBottom: value,
    }),

    size: (value: string | number) => ({ width: value, height: value }),
    spaceY: (value: string | number) => ({
        "& > :not([hidden]) ~ :not([hidden])": {
            marginTop: value,
        },
    }),
    spaceX: (value: string | number) => ({
        "& > :not([hidden]) ~ :not([hidden])": {
            marginLeft: value,
        },
    }),
    typeStyle: (styleName: TypeStyles) =>
        styleName === "hero"
            ? {
                  fontSize: "var(--fontSizes-7)",
                  fontWeight: "var(--fontWeights-heavy)",
                  fontFamily: "var(--fonts-display)",
                  lineHeight: "var(--lineHeights-tight)",
                  letterSpacing: "var(--letterSpacings-tighter)",
              }
            : styleName === "headline"
            ? {
                  fontSize: "var(--fontSizes-6)",
                  lineHeight: "var(--lineHeights-tight)",
                  fontFamily: "var(--fonts-display)",
                  fontWeight: "var(--fontWeights-heavy)",
                  letterSpacing: "var(--letterSpacings-tighter)",
              }
            : styleName === "title1"
            ? {
                  fontSize: "var(--fontSizes-5)",
                  lineHeight: "var(--lineHeights-tight)",
                  fontFamily: "var(--fonts-display)",
                  fontWeight: "var(--fontWeights-heavy)",
                  letterSpacing: "var(--letterSpacings-tight)",
              }
            : styleName === "title2"
            ? {
                  fontSize: "var(--fontSizes-4)",
                  lineHeight: "var(--lineHeights-tight)",
                  fontFamily: "var(--fonts-display)",
                  fontWeight: "var(--fontWeights-heavy)",
                  letterSpacing: "var(--letterSpacings-tight)",
              }
            : styleName === "title3"
            ? {
                  fontSize: "var(--fontSizes-3)",
                  lineHeight: "var(--lineHeights-tight)",
                  fontFamily: "var(--fonts-display)",
                  fontWeight: "var(--fontWeights-heavy)",
                  letterSpacing: "var(--letterSpacings-tight)",
              }
            : styleName === "heading"
            ? {
                  fontSize: "var(--fontSizes-2)",
                  lineHeight: "var(--lineHeights-tight)",
                  fontFamily: "var(--fonts-display)",
                  fontWeight: "var(--fontWeights-heavy)",
                  letterSpacing: "var(--letterSpacings-tight)",
              }
            : styleName === "subhead"
            ? {
                  fontSize: "var(--fontSizes-1)",
                  fontFamily: "var(--fonts-display)",
                  fontWeight: "var(--fontWeights-heavy)",
                  letterSpacing: "var(--letterSpacings-normal)",
              }
            : styleName === "body"
            ? {
                  fontSize: "var(--fontSizes-0)",
                  fontFamily: "var(--fonts-text)",
                  letterSpacing: "var(--letterSpacings-normal)",
              }
            : styleName === "footnote"
            ? {
                  fontSize: "var(--fontSizes--1)",
                  fontFamily: "var(--fonts-text)",
                  letterSpacing: "var(--letterSpacings-wide)",
              }
            : styleName === "caption"
            ? {
                  fontSize: "var(--fontSizes--2)",
                  fontFamily: "var(--fonts-text)",
              }
            : styleName === "micro"
            ? {
                  fontSize: "var(--fontSizes--3)",
                  fontFamily: "var(--fonts-text)",
              }
            : {},
};

export const stitchesTheme = {
    fonts: {
        display: "circe, sans-serif",
        text: "lato, sans-serif",
    },
    fontWeights: {
        standard: 400,
        heavy: 700,
    },
    letterSpacings: {
        tightest: "-.025em",
        tighter: "-.015em",
        tight: "-.01em",
        normal: 0,
        wide: ".005em",
        wider: ".01em",
        widest: ".02em",
    },
    radii: {
        xs: "0.125rem", // 2px
        sm: "0.25rem", // 4px
        md: "0.5rem", // 8px
        lg: "0.75rem", // 12px
    },
    fontSizes: {
        "-3": "0.6875rem", // 11
        "-2": "0.75rem", // 12
        "-1": "0.875rem", // 14
        0: "1rem", // 16
        1: "clamp(1.13rem, calc(1.10rem + 0.11vw), 1.20rem)",
        2: "clamp(1.27rem, calc(1.22rem + 0.25vw), 1.44rem)",
        3: "clamp(1.42rem, calc(1.34rem + 0.43vw), 1.73rem)",
        4: "clamp(1.60rem, calc(1.47rem + 0.67vw), 2.07rem)",
        5: "clamp(1.80rem, calc(1.61rem + 0.98vw), 2.49rem)",
        6: "clamp(2.03rem, calc(1.75rem + 1.37vw), 2.99rem)",
        7: "clamp(2.28rem, calc(1.91rem + 1.86vw), 3.58rem)",
    },
    space: {
        "05": "0.25rem", // 4px
        1: "0.5rem", // 8px
        2: "1rem", // 16px
        3: "1.5rem", // 24px
        4: "2rem", // 32px
        5: "2.5rem", // 40px
        6: "3rem", // 48px
        7: "3.5rem", // 56px
        8: "4rem", // 64px
        9: "4.5rem", // 72px
        10: "5rem", // 80px
    },
    sizes: {
        micro: "20rem", // 320
        xsmall: "30rem", // 480
        small: "40rem", // 640
        medium: "60rem", // 960
        large: "80rem", // 1280
        xlarge: "90rem", // 1440
        max: "100rem",
    },
    shadows: {
        1: "0px 1px 1px rgba(0, 0, 0, 0.2)",
        2: "0px 2px 3px rgba(0, 0, 0, 0.16)",
        3: "0px 3px 4px rgba(0, 0, 0, 0.16)",
        4: "1px 4px 8px rgba(0, 0, 0, 0.16)",
        5: "0px 12px 12px rgba(0, 0, 0, 0.18)",
    },
    colors: {
        primaryBrand: "#1C66DE",
        primaryMidnight: "#030063",

        // Neutrals
        white: "#ffffff",
        black: "#000000",
        ...slate,
        ...slateA,

        // Accent palette:
        // Note: These colours wont change per theme
        accentAmber: amber.amber9,
        accentOrange: orangeDark.orange10,
        accentRed: red.red9,
        accentPlum: plumDark.plum9,
        accentBlue: blueDark.blue8,
        accentSky: sky.sky8,
        accentTeal: teal.teal9,
        accentGreen: green.green8,

        // Extended palette:
        ...amber,
        ...red,
        ...plum,
        ...indigo,
        ...blue,
        ...sky,
        ...teal,
        ...green,
        ...orange,

        // ! Deprecated:
        neutral100: "#FFFFFF",
        neutral200: "#F4F8FC",
        neutral300: "#D5DDE5",
        neutral400: "#B1BCC7",
        neutral500: "#8C9AA8",
        neutral600: "#6F7F8F",
        neutral700: "#415161",
        neutral800: "#293642",
        neutral900: "#172029",

        midnight100: "#050096",
        midnight300: "#04007D",
        midnight500: "var(--colors-primaryMidnight)",
        midnight700: "#020042",
        midnight900: "#010029",

        accentOrangeDark: "#E68B18",
        accentPink: "#EA5165",
        accentPurple: "#682383",
        accentNavy: "#003D6A",
        accentRoyal: "#005695",
        accentCyan: "#00AADB",
        accentLime: "#67BA8A",
    },
    lineHeights: {
        tighter: "1.1em",
        tight: "1.2em",
        normal: "1.4em",
        wide: "1.5em",
    },
};

export const stitchesMedia = {
    // Core breakpoints:
    xs: "(min-width: 0)",
    sm: "(min-width: 48rem)", // 768
    md: "(min-width: 64rem)", // 1024
    lg: "(min-width: 80rem)", // 1280
    xl: "(min-width: 90rem)", // 1440

    // Sub Breakpoints:
    xs1: "var(--media-xs)", // 0
    xs2: "(min-width: 480px)",
    xs3: "(min-width: 600px)",

    sm1: "var(--media-sm)", // 768
    sm2: "(min-width: 840px)",
    sm3: "(min-width: 960px)",

    md1: "var(--media-md)", // 1024
    md2: "(min-width: 1140px)",
    md3: "(min-width: 1200px)",

    lg1: "var(--media-lg)", // 1280
    lg2: "(min-width: 1320px)",
    lg3: "(min-width: 1400px)",

    xl1: "var(--media-xl)", // 1440
    xl2: "(min-width: 1600px)",
    xl3: "(min-width: 1920px)",
};

export const stitchesDarkColors = {
    colors: {
        // Neutrals
        white: "#000000",
        black: "#ffffff",
        ...slateDark,
        ...slateDarkA,

        // Extended palette:
        ...amberDark,
        ...redDark,
        ...plumDark,
        ...indigoDark,
        ...blueDark,
        ...skyDark,
        ...tealDark,
        ...greenDark,
        ...orangeDark,
    },
};
