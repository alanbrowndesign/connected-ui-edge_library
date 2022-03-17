import React from "react";
import { styled } from "~/src/styles/stitches.config";

export interface ButtonProps {
    label: string;
}

const StyledButton = styled("button", {
    background: "red",
    typeStyle: "footnote",
    borderRadius: 20,
    padding: 10,
});

export const Button = (props: ButtonProps) => {
    const { label } = props;
    return <StyledButton>{label}dddddaASasaS</StyledButton>;
};
