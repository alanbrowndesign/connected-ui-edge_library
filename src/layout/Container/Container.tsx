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
                paddingInline: "$2",
            },
            normal: {
                paddingInline: "$4",
            },
            loose: {
                paddingInline: "$6",
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
};

export const Container = ({
    width,
    gap,
    sidePadding,
    children,
}: ContainerProps) => {
    return (
        <StyledContainer width={width} gap={gap} sidePadding={sidePadding}>
            {children}
        </StyledContainer>
    );
};
