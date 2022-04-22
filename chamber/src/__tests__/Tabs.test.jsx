import {fireEvent, render} from '@testing-library/react';
import {Tabs} from "../components/Tabs/Tabs";
import {Tab} from "../components/Tab/Tab";

const tabItems = [{text: "All"}, {text: "Layout"}, {text: "Social media"},]

describe("Tabs component testing", () => {
    test('should render all elements properly in Tabs component', () => {
        const {getByText} = render(<Tabs tabItems={tabItems}
        />);

        tabItems.map(item => expect(getByText(item.text)).toBeInTheDocument())
        expect(true).toBe(true)
    });
    test('should render Tab component properly', () => {
        const {container} = render(<Tab isActive={true}
                                        value={"All"}
                                        handleClick={() => {
                                        }}/>);

        const input = container.querySelector("input")
        const label = container.querySelector("label")

        expect(input).toBeInTheDocument()
        expect(input.value).toBe("All")

        expect(label).toBeInTheDocument()
        expect(label).toHaveClass("bg-purple-200")
    });
    test('should have grey background when is not active', () => {
        const {container} = render(<Tab isActive={false}
                                        value={"Layout"}
                                        handleClick={() => {
                                        }}/>);

        const label = container.querySelector("label")

        expect(label).toHaveClass("bg-gray-100")
    });
    test('should call function upon clicking on input', () => {

        const handleClick = jest.fn();
        const {container} = render(<Tab isActive={false}
                                        value={"Layout"}
                                        handleClick={handleClick}/>);

        const input = container.querySelector("input")

        fireEvent.click(input)

        expect(handleClick).toHaveBeenCalledWith("Layout")
    });
})
