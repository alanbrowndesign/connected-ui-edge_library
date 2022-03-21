// stitches.config.ts
import { createStitches, defaultThemeMap } from "@stitches/react";
import type * as Stitches from "@stitches/react";
import {
    stitchesTheme,
    stitchesMedia,
    stitchesUtils,
    stitchesThemeMap,
} from "./stitchesTokens";

export const { styled, css, theme, globalCss, config, keyframes } =
    createStitches({
        prefix: "",
        themeMap: {
            ...stitchesThemeMap,
        },
        media: {
            ...stitchesMedia,
        },
        theme: {
            ...stitchesTheme,
        },
        utils: {
            ...stitchesUtils,
        },
    });

type CSS = Stitches.CSS<typeof config>;
export type { CSS } from "@stitches/react/types/css-util";
