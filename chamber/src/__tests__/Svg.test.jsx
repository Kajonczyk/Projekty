import {render} from "@testing-library/react";
import {Svg} from "../components/Svg/Svg";


describe("svg component testing", () => {
    test("should return addIcon from Svg component", () => {
        const {getByText} = render(<Svg icon={"addIcon"}/>)

        expect(getByText("addIcon.svg")).toBeInTheDocument()
    })
    test("should return closeIcon from Svg component", () => {
        const {getByText} = render(<Svg icon={"closeIcon"}/>)

        expect(getByText("closeIcon.svg")).toBeInTheDocument()
    })
    test("should return imageIcon from Svg component", () => {
        const {getByText} = render(<Svg icon={"imageIcon"}/>)

        expect(getByText("imageIcon.svg")).toBeInTheDocument()
    })
    test("should return playIcon from Svg component", () => {
        const {getByText} = render(<Svg icon={"playIcon"}/>)

        expect(getByText("playIcon.svg")).toBeInTheDocument()
    })
    test("should return textIcon from Svg component", () => {
        const {getByText} = render(<Svg icon={"textIcon"}/>)
        expect(getByText("textIcon.svg")).toBeInTheDocument()
    })
})