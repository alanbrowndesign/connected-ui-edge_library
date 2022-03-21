import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "./Button";
const TypeTestText = "The Quick Brown Fox";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Components/Actions/Button",
    component: Button,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => (
    <Button type={args.type} onClick={args.onClick}>
        {args.children}
    </Button>
);

export const Primary = Template.bind({});
Primary.args = {
    type: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
    type: "secondary",
};

// export const ClickMe = Template.bind({});
// ClickMe.args = {
//     label: "Click me!",
// };
