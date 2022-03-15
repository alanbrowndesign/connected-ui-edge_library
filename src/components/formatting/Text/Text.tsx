import React from "react";
import { theme, styled } from "@/styles/stitches.config";
import { getTokens } from "@/utils/getTokens";
import { getTypeStyles } from "@/utils/getTypeStyles";

const StyledText = styled("div", {
    variants: {
        typeStyle: {
            ...getTypeStyles(),
        },
        color: {
            ...getTokens(theme.colors, "color"),
        },
        leading: {
            ...getTokens(theme.lineHeights, "lineHeight"),
        },
        weight: {
            ...getTokens(theme.fontWeights, "fontWeight"),
        },
        size: {
            ...getTokens(theme.fontSizes, "fontSize"),
        },
        font: {
            ...getTokens(theme.fonts, "fontFamily"),
        },
    },
    defaultVariants: {
        typeStyle: "body",
    },
});

type TextProps = {
    children: React.ReactNode;
    typeStyle?:
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
    tag?: any;
    color?: string;
    leading?: "tighter" | "tight" | "normal" | "wide";
    weight?: "standard" | "heavy";
    size?: number;
    font?: "display" | "text";
};

export const Text = ({
    children,
    typeStyle,
    tag,
    color,
    leading,
    weight,
    size,
    font,
}: TextProps) => {
    return (
        <StyledText
            typeStyle={typeStyle}
            color={color}
            leading={leading}
            weight={weight}
            size={size}
            font={font}
            as={tag}
        >
            {children}
        </StyledText>
    );
};
