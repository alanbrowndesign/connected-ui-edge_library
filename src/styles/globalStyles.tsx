import { globalCss } from "./stitches.config";

const customStitchesStyles = {
    html: {
        boxSizing: "border-box",
    },

    "*, *:before, *:after": {
        boxSizing: "inherit",
    },

    body: {
        "-webkit-font-smoothing": "antialiased",
        fontFamily: "var(--fonts-text)",
        lineHeight: "var(--lineHeights-normal)",
        margin: 0,
    },

    // reset type
    "h1, h2, h3, h4, h5, h6": {
        margin: 0,
    },
};

export const stitchesStyles = () => {
    globalCss(customStitchesStyles)();
};
