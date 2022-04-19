import React from 'react';
import {DndProvider} from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch';
import {List} from "../components/List/List";

export default {
    title: 'Dnd',
    component: List,
};

const Template = () => <DndProvider options={HTML5toTouch}>
    <List/>
</DndProvider>;

export const Default = Template.bind({});

Default.args = {};
