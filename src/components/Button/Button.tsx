import React from "react";
import { styled } from "../../styles/stitches.config";

export interface ButtonProps {
    label: string;
}

const StyledButton = styled("button", {
    background: "orange",
    typeStyle: "footnote",
    borderRadius: 20,
    padding: 10,
});

export const Button = (props: ButtonProps) => {
    const { label } = props;
    return <StyledButton>{label}dddddaASasaS</StyledButton>;
};
