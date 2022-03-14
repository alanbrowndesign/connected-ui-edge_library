import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Text } from "./Text";
const TypeTestText = "The Quick Brown Fox";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Components/Formatting",
    component: Text,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Text> = (args) => (
    <Text typeStyle="hero">{args.label}</Text>
);

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
    label: TypeTestText,
};

// export const ClickMe = Template.bind({});
// ClickMe.args = {
//     label: "Click me!",
// };
