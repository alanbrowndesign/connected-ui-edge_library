import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Text } from "./Text";
const TypeTestText = "The Quick Brown Fox";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Components/Formatting/Text",
    component: Text,
    argTypes: {
        children: {
            description: "overwritten description",
            control: {
                type: "text",
                defaultValue: "cunzho",
            },
        },
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Text> = (args) => (
    <Text
        typeStyle={args.typeStyle}
        tag={args.tag}
        leading={args.leading}
        color={args.color}
        font={args.font}
        weight={args.weight}
    >
        {args.children}
    </Text>
);

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
    typeStyle: "hero",
    tag: "h1",
    color: "primaryBrand",
    children: <div>The quick brown fox</div>,
};

// export const ClickMe = Template.bind({});
// ClickMe.args = {
//     label: "Click me!",
// };
