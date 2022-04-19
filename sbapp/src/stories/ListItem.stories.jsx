import React from 'react';
import {DndProvider} from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch';
import {List} from "../components/List/List";
import {Tabs} from "../components/Tabs/Tabs";

const tabItems = [
    {name: "88421"},
    {name: "88421"},
    {name: "88421"},
    {name: "88421"},
]

export default {
    title: 'Tabs',
    component: List,
    argTypes: {
        tabSize: {control: {type: "select", options: ["small", "auto", "large"]}},
        mode: {control: {type: "select", options: ["background", "underline"]}},
    },
};

const Template = (args) => <DndProvider options={HTML5toTouch}>
    <Tabs tabItems={tabItems} {...args}/>
</DndProvider>;

export const UnderlineLarge = Template.bind({});

UnderlineLarge.args = {
    mode: "underline",
    tabSize: "large"
};

export const UnderlineSmall = Template.bind({});

UnderlineSmall.args = {
    mode: "underline",
    tabSize: "small"
};

export const UnderlineAuto = Template.bind({});

UnderlineAuto.args = {
    mode: "underline",
    tabSize: "auto"
};

export const BackgroundLarge = Template.bind({});

BackgroundLarge.args = {
    mode: "background",
    tabSize: "large"
};

export const BackgroundSmall = Template.bind({});

BackgroundSmall.args = {
    mode: "background",
    tabSize: "small"
};

export const BackgroundAuto = Template.bind({});

BackgroundAuto.args = {
    mode: "background",
    tabSize: "auto"
};
