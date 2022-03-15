// stitches.config.ts
import { createStitches, defaultThemeMap } from "@stitches/react";
import type * as Stitches from "@stitches/react";

export const { styled, css, theme, globalCss, config } = createStitches({
    prefix: "",
    themeMap: {
        // Map these properties to the `space` scale
        ...defaultThemeMap,
        width: "space",
        height: "space",
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
        radii: {
            xs: 2,
            sm: 4,
            md: 8,
            lg: 12,
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

type CSS = Stitches.CSS<typeof config>;
export type { CSS } from "@stitches/react/types/css-util";
