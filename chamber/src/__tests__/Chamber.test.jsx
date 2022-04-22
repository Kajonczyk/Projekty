import {fireEvent, getByText, render} from "@testing-library/react";
import {Svg} from "../components/Svg/Svg";
import {ToolBoxElement} from "../components/ToolBoxElement/ToolBoxElement";
import {Chamber} from "../components/Chamber/Chamber";


describe("Chamber component testing", () => {
    test("should add toolbox upon clicking add button", () => {

        const {getByTestId, getByText, queryByText, queryAllByText} = render(<Chamber/>)

        const createToolBoxButton = getByTestId("createToolBoxButton")

        expect(getByText("Click to add a Tool here")).toBeInTheDocument()

        fireEvent.click(createToolBoxButton)
        expect(queryByText("Click to add a Tool here")).not.toBeInTheDocument()

        const addIcons = queryAllByText("addIcon.svg")

        expect(addIcons).toHaveLength(2)

        fireEvent.click(addIcons[0])
        fireEvent.click(addIcons[1])

        expect(queryAllByText("ToolBox")).toHaveLength(3)
    })

})