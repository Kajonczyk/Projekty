import {fireEvent, getByText, render} from "@testing-library/react";
import {ToolBoxElement} from "../components/ToolBoxElement/ToolBoxElement";

describe("ToolBoxElement component testing", () => {
    test("should call function upon clicking close button", () => {

        const setToolBoxes = jest.fn()

        const {getByTestId} = render(<ToolBoxElement toolBoxId={"15"} setToolBoxes={setToolBoxes}/>)

        const closeIcon = getByTestId("closeButton");
        fireEvent.click(closeIcon)

        expect(setToolBoxes).toHaveBeenCalledTimes(1)
    })

    test("should show only video option when selected tab is social media", () => {

        const {getByText, queryByText} = render(<ToolBoxElement toolBoxId={"15"} setToolBoxes={jest.fn}/>)

        fireEvent.click(getByText("Social media"))

        expect(queryByText("Text")).not.toBeInTheDocument()
        expect(queryByText("Image")).not.toBeInTheDocument()
        expect(queryByText("Video")).toBeInTheDocument()
    })

    test("should show image and text option when selected tab is layout", () => {

        const {getByText, queryByText} = render(<ToolBoxElement toolBoxId={"15"} setToolBoxes={jest.fn}/>)

        fireEvent.click(getByText("Layout"))

        expect(queryByText("Text")).toBeInTheDocument()
        expect(queryByText("Image")).toBeInTheDocument()
        expect(queryByText("Video")).not.toBeInTheDocument()
    })
})