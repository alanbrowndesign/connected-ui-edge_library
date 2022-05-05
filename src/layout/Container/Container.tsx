import { styled, theme } from "@/styles/stitches.config";
import { getTokens, getSpaces } from "@/utils";

const StyledContainer = styled("div", {
    width: "100%",
    marginInline: "auto",
    variants: {
        width: {
            ...getTokens(theme.sizes, "maxWidth"),
        },
        gap: {
            ...getSpaces(),
        },
        sidePadding: {
            none: {
                paddingInline: 0,
            },
            tight: {
                paddingInline: "$space$xs",
            },
            normal: {
                paddingInline: "$space$s",
            },
            loose: {
                paddingInline: "$space$m",
            },
        },
    },
    defaultVariants: {
        sidePadding: "normal",
        width: "max",
    },
});

type ContainerProps = {
    width?:
        | "micro"
        | "xsmall"
        | "small"
        | "medium"
        | "large"
        | "xlarge"
        | "max";
    gap?: number;
    sidePadding?: "none" | "tight" | "normal" | "loose";
    children: React.ReactNode;
    css?: any;
};

export const Container = ({
    width,
    gap,
    sidePadding,
    children,
    css,
    ...rest
}: ContainerProps) => {
    return (
        <StyledContainer
            width={width}
            gap={gap}
            sidePadding={sidePadding}
            {...rest}
            css={{ ...css }}
        >
            {children}
        </StyledContainer>
    );
};
