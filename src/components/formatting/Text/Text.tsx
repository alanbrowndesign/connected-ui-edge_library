import React from "react";

import {
    stitches,
    styled,
    typeStyleNames,
} from "../../../styles/stitches.config";

const tokens = stitches.config.theme;

const getType = stitches.config.utils.typeStyle;

const getTypeStyles = () => {
    // Empty object
    let newStyle: any = {};

    typeStyleNames.map((name, i) => {
        newStyle[name] = getType(name);
    });

    return newStyle;
};

getTypeStyles();

const getTokens = (tokenObject: object, cssProperty: string = "color") => {
    // Get the colour names array
    const tokenNames = Object.keys(tokenObject);

    // Empty object
    let newTokens: any = {};

    // Loop over the array to build new CSS
    tokenNames.map((name, i) => {
        newTokens[name] = {};
        newTokens[name][cssProperty] = `$${name}`;
    });

    return newTokens;
};

const StyledText = styled("div", {
    variants: {
        typeStyle: {
            ...getTypeStyles(),
        },
        color: {
            ...getTokens(tokens.colors, "color"),
        },
        leading: {
            ...getTokens(tokens.lineHeights, "lineHeight"),
        },
        weight: {
            ...getTokens(tokens.fontWeights, "fontWeight"),
        },
        size: {
            ...getTokens(tokens.fontSizes, "fontSize"),
        },
        font: {
            ...getTokens(tokens.fonts, "fontFamily"),
        },
    },
});

export const Text = (props: any) => {
    const { children, typeStyle, tag, color, leading, weight, size, font } =
        props;

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

Text.defaultProps = {
    typeStyle: "body",
};
