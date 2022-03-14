// stitches.config.ts
import { createStitches, CSS as StitchesCSS } from "@stitches/react";
export type { CSS } from "@stitches/react/types/css-util";

export const typeStyleNames = [
    "hero",
    "headline",
    "title1",
    "title2",
    "title3",
    "heading",
    "subhead",
    "body",
    "footnote",
    "caption",
    "micro",
];

export const stitches = createStitches({
    prefix: "",
    theme: {
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
        fontSizes: {
            // "-3": "var(--step--3)",
            // "-2": "var(--step--2)",
            // "-1": "var(--step--1)",
            0: "var(--step-0)",
            1: "var(--step-1)",
            2: "var(--step-2)",
            3: "var(--step-3)",
            4: "var(--step-4)",
            5: "var(--step-5)",
            6: "var(--step-6)",
            7: "var(--step-7)",
        },
        colors: {
            primaryBrand: "#1C66DE",
            primaryMidnight: "#030063",

            white: "#ffffff",
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

            accentOrange: "#EAA51A",
            accentOrangeDark: "#E68B18",
            accentPink: "#EA5165",
            accentPurple: "#682383",
            accentNavy: "#003D6A",
            accentRoyal: "#005695",
            accentCyan: "#00AADB",
            accentSky: "#8DD3F6",
            accentTeal: "#00B59F",
            accentLime: "#67BA8A",
        },
        lineHeights: {
            tighter: "1.1em",
            tight: "1.2em",
            normal: "1.4em",
            wide: "1.5em",
        },
        media: {
            // Core breakpoints:
            xs: "(min-width: 0px)",
            sm: "(min-width: 768px)",
            md: "(min-width: 1024px)",
            lg: "(min-width: 1280px)",
            xl: "(min-width: 1440px)",

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
        },
    },
    utils: {
        typeStyle: (styleName: any) =>
            styleName === "$hero" || styleName === "hero"
                ? {
                      fontSize: "var(--fontSizes-7)",
                      fontWeight: "var(--fontWeights-heavy)",
                      fontFamily: "var(--fonts-display)",
                      lineHeight: "var(--lineHeights-tight)",
                      letterSpacing: "var(--letterSpacings-tighter)",
                  }
                : styleName === "$headline" || styleName === "headline"
                ? {
                      fontSize: "var(--fontSizes-6)",
                      lineHeight: "var(--lineHeights-tight)",
                      fontFamily: "var(--fonts-display)",
                      fontWeight: "var(--fontWeights-heavy)",
                      letterSpacing: "var(--letterSpacings-tighter)",
                  }
                : styleName === "$title1" || styleName === "title1"
                ? {
                      fontSize: "var(--fontSizes-5)",
                      lineHeight: "var(--lineHeights-tight)",
                      fontFamily: "var(--fonts-display)",
                      fontWeight: "var(--fontWeights-heavy)",
                      letterSpacing: "var(--letterSpacings-tight)",
                  }
                : styleName === "$title2" || styleName === "title2"
                ? {
                      fontSize: "var(--fontSizes-4)",
                      lineHeight: "var(--lineHeights-tight)",
                      fontFamily: "var(--fonts-display)",
                      fontWeight: "var(--fontWeights-heavy)",
                      letterSpacing: "var(--letterSpacings-tight)",
                  }
                : styleName === "$title3" || styleName === "title3"
                ? {
                      fontSize: "var(--fontSizes-3)",
                      lineHeight: "var(--lineHeights-tight)",
                      fontFamily: "var(--fonts-display)",
                      fontWeight: "var(--fontWeights-heavy)",
                      letterSpacing: "var(--letterSpacings-tight)",
                  }
                : styleName === "$heading" || styleName === "heading"
                ? {
                      fontSize: "var(--fontSizes-2)",
                      lineHeight: "var(--lineHeights-tight)",
                      fontFamily: "var(--fonts-display)",
                      fontWeight: "var(--fontWeights-heavy)",
                      letterSpacing: "var(--letterSpacings-tight)",
                  }
                : styleName === "$subhead" || styleName === "subhead"
                ? {
                      fontSize: "var(--fontSizes-1)",
                      fontFamily: "var(--fonts-display)",
                      fontWeight: "var(--fontWeights-heavy)",
                      letterSpacing: "var(--letterSpacings-normal)",
                  }
                : styleName === "$body" || styleName === "body"
                ? {
                      fontSize: "var(--fontSizes-0)",
                      fontFamily: "var(--fonts-text)",
                      letterSpacing: "var(--letterSpacings-normal)",
                  }
                : styleName === "$footnote" || styleName === "footnote"
                ? {
                      fontSize: "var(--fontSizes--1)",
                      fontFamily: "var(--fonts-text)",
                      letterSpacing: "var(--letterSpacings-wide)",
                  }
                : styleName === "$caption" || styleName === "caption"
                ? {
                      fontSize: "var(--fontSizes--2)",
                      fontFamily: "var(--fonts-text)",
                  }
                : styleName === "$micro" || styleName === "micro"
                ? {
                      fontSize: "var(--fontSizes--3)",
                      fontFamily: "var(--fonts-text)",
                  }
                : {},
    },
});

export const { css, styled, globalCss, theme, keyframes, getCssText } =
    stitches;
