import {getByTestId, render} from '@testing-library/react';
import {Tabs} from "../components/Tabs/Tabs";
import {Underline} from "../components/Tabs/Tabs.style";

const tabItems = [
    {name: "88421"},
    {name: "78421"},
    {name: "88721"},
    {name: "88821"},
]

describe("Tabs component testing", () => {
    test('renders all elements properly in underline mode', () => {
        const {getByText, getByTestId} = render(<Tabs tabSize={"small"} tabItems={tabItems}
                                                      mode={"underline"}/>);

        tabItems.map(item => expect(getByText(item.name)).toBeInTheDocument())
        expect(getByTestId("tabsUnderline")).toBeInTheDocument()
    });
    test('renders all elements properly in background mode', () => {
        const {getByText, queryByTestId} = render(<Tabs tabSize={"small"} tabItems={tabItems}
                                                        mode={"background"}/>);

        tabItems.map(item => expect(getByText(item.name)).toBeInTheDocument())
        expect(queryByTestId("tabsUnderline")).not.toBeInTheDocument()
    });

    test("tab elements should have certain width when tabSize is small", () => {
        const {getByText} = render(<Tabs tabSize={"small"} tabItems={tabItems}
                                         mode={"background"}/>);

        const tabWidth = window.getComputedStyle(getByText(tabItems[0].name)).getPropertyValue("width")
        expect(tabWidth).toBe("80px")
    })

    test("tab elements should have certain width when tabSize is large", () => {
        const {getByText} = render(<Tabs tabSize={"large"} tabItems={tabItems}
                                         mode={"background"}/>);

        const tabWidth = window.getComputedStyle(getByText(tabItems[0].name)).getPropertyValue("width")
        expect(tabWidth).toBe("180px")
    })


})
describe("underline testing", () => {
    test("underline should be placed in certain position", () => {

        const INITIAL_OFFSET = 20;
        const LEFT = 400;

        const {getByTestId} = render(<Underline data-testid={"tabsUnderline"} size={200}
                                                           left={LEFT}/>);

        const underlineLeftValue = window.getComputedStyle(getByTestId("tabsUnderline")).getPropertyValue("left")

        expect(underlineLeftValue).toBe(`${LEFT + INITIAL_OFFSET}px`)
    })
})