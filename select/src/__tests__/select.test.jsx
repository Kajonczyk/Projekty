import {CustomSelect} from "../components/select/select";
import {fireEvent, render} from "@testing-library/react";
import App from "../App";

const options = [
    {value: 'Frontend', label: 'Frontend'},
    {value: 'Backend', label: 'Backend'},
    {value: 'DevOps', label: 'DevOps'},
];

describe("select component testing", () => {
    test("should render select component correctly", () => {
        const {getByText} = render(<CustomSelect options={options} styles={{}}/>)
        expect(getByText(options[0].label)).toBeInTheDocument()
    })

    test("should show select values on select and change value on option click", () => {
        const {getByText, queryByText, container} = render(<App/>)

        const selectComponent = container.querySelector(".selectComponent")

        expect(selectComponent).toBeDefined();

        fireEvent.keyDown(selectComponent.firstChild, { key: 'ArrowDown' });
        fireEvent.click(getByText(options[1].label));

        expect(queryByText(options[0].label)).not.toBeInTheDocument()
        expect(queryByText(options[2].label)).not.toBeInTheDocument()
    })
})