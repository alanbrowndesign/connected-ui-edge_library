import { styled, darkTheme } from "@/styles/stitches.config";
import { motion } from "framer-motion";
import { Text } from "@/components/formatting";

const StyledButton = styled(motion.button, {
    // Reset
    border: 0,
    cursor: "pointer",

    typeStyle: "body",
    fontFamily: "$display",
    fontWeight: "$heavy",
    color: "white",
    paddingInline: "$2",
    paddingBlock: "$1",
    position: "relative",
    background: "transparent",

    ".button-inner": {
        position: "relative",
        zIndex: 2,
    },

    "&::after": {
        content: "",
        display: "block",
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
    },

    variants: {
        type: {
            primary: {
                "&::after": {
                    backgroundColor: "$primaryBrand",
                    borderRadius: "$sm",
                    [`.${darkTheme} &`]: {
                        background: "$red12",
                    },
                },
            },
            secondary: {
                color: "$primaryBrand",
                "&::after": {
                    background: "transparent",
                    border: "2px solid $primaryBrand",
                    borderRadius: "$sm",
                },
                background: "transparent",
            },
        },
    },
});

type ButtonProps = {
    type?: "primary" | "secondary";
    children: React.ReactNode;
    onClick: Function;
};

export const Button = (props: ButtonProps) => {
    const { type, children, onClick } = props;
    return (
        <>
            <StyledButton
                type={type}
                // @ts-expect-error
                onClick={onClick}
                whileHover={{
                    scale: 1.05,
                }}
                whileTap={{
                    scale: 0.975,
                }}
            >
                <div className="button-inner">{children}</div>
            </StyledButton>
        </>
    );
};

Button.defaultProps = {
    children: "I am a button!",
    type: "primary",
};
