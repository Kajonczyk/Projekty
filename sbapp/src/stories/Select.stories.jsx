import React from 'react';
import {DndProvider} from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch';
import {List} from "../components/List/List";
import {CustomSelect} from "../components/Select/Select";


const customStyles = {
    control: (provided) => ({
        ...provided,
        backgroundColor: "rgba(255,165,0,1)",
        boxShadow: '0!important',
        '&:hover': {
            border: '1px solid transparent!important'
        }
    }),
    input: (provided) => ({
        ...provided,
        color: "white"
    }),
    singleValue: (provided) => ({
        ...provided,
        color: "white"
    }),
    placeholder: (provided) => ({
        ...provided,
        color: "white"
    }),
    indicatorSeparator: (provided) => ({
        ...provided,
        display: "none"
    }),
    dropdownIndicator: (provided) => ({
        ...provided,
        color: "white",
    }),
    menuList: (provided) => ({
        ...provided,
        backgroundColor: "rgba(255,165,0,0.6)",
        padding: 0
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: "orange",
        color: "white",
        opacity: state.isFocused ? 1 : 0.6,
    })
}

const options = [
    {value: 'Frontend', label: 'Frontend'},
    {value: 'Backend', label: 'Backend'},
    {value: 'DevOps', label: 'DevOps'},
];

export default {
    title: 'Select',
    component: List,
};

const Template = () => <DndProvider options={HTML5toTouch}>
    <CustomSelect options={options} styles={customStyles}/>
</DndProvider>;

export const Default = Template.bind({});
Default.args = {};
