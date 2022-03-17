import { globalCss } from "./stitches.config";

const customStyles = {
    body: {
        fontSmoothing: "antialiased",
        lineHeight: "var(--lineHeights-normal)",
    },

    ":root": {
        /* @link https://utopia.fyi/type/calculator?c=320,16,1.125,1440,16,1.2,7,3,768&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l */

        "--step--3": "0.6875rem", // 11px
        "--step--2": "0.75rem", // 12px
        "--step--1": "0.875rem", // 14px
        "--step-0": "1rem", // 16px
        "--step-1": "clamp(1.13rem, calc(1.10rem + 0.11vw), 1.20rem)",
        "--step-2": "clamp(1.27rem, calc(1.22rem + 0.25vw), 1.44rem)",
        "--step-3": "clamp(1.42rem, calc(1.34rem + 0.43vw), 1.73rem)",
        "--step-4": "clamp(1.60rem, calc(1.47rem + 0.67vw), 2.07rem)",
        "--step-5": "clamp(1.80rem, calc(1.61rem + 0.98vw), 2.49rem)",
        "--step-6": "clamp(2.03rem, calc(1.75rem + 1.37vw), 2.99rem)",
        "--step-7": "clamp(2.28rem, calc(1.91rem + 1.86vw), 3.58rem)",

        // Breakpoints:
        "--media-xs": "0",
        "--media-sm": "48rem", // 768
        "--media-md": "64rem", // 1024
        "--media-lg": "80rem", // 1280
        "--media-xl": "90rem", // 1440
    },
};

export const stitchesStyles = () => {
    globalCss(customStyles)();
};
