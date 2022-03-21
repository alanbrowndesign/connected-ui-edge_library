import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Container } from "./Container";
const TypeTestText = "The Quick Brown Fox";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Layout/Container",
    component: Container,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Container> = (args) => (
    <Container width={args.width} gap={args.gap} sidePadding={args.sidePadding}>
        <p>
            Tu quoque, Brute, fili mi, nihil timor populi, nihil! Plura mihi
            bona sunt, inclinet, amari petere vellent. Qui ipsorum lingua
            Celtae, nostra Galli appellantur. Paullum deliquit, ponderibus
            modulisque suis ratio utitur. Gallia est omnis divisa in partes
            tres, quarum. Cum ceteris in veneratione tui montes, nascetur mus.
            Idque Caesaris facere voluntate liceret: sese habere. Quisque
            placerat facilisis egestas cillum dolore.
        </p>
        <p>
            Tu quoque, Brute, fili mi, nihil timor populi, nihil! Plura mihi
            bona sunt, inclinet, amari petere vellent. Qui ipsorum lingua
            Celtae, nostra Galli appellantur. Paullum deliquit, ponderibus
            modulisque suis ratio utitur. Gallia est omnis divisa in partes
            tres, quarum. Cum ceteris in veneratione tui montes, nascetur mus.
            Idque Caesaris facere voluntate liceret: sese habere. Quisque
            placerat facilisis egestas cillum dolore.
        </p>
    </Container>
);

export const Medium = Template.bind({});
Medium.args = {
    width: "medium",
};
