import {v4 as uuidv4} from "uuid";
import {fireEvent, render} from "@testing-library/react";
import App from "../App";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";
import {ListItem} from "../components/ListItem/ListItem";

const listItemsData = [
    {id: uuidv4(), text: "Jag00dka"},
    {id: uuidv4(), text: "W0JT3K"},
    {id: uuidv4(), text: "K4M1L"},
    {id: uuidv4(), text: "Name"},
    {id: uuidv4(), text: "Great"},
    {id: uuidv4(), text: "Amazing"},
    {id: uuidv4(), text: "Lorem Ipsum is cool"},
]

describe("Drag and drop components testing", () => {
    test("should render all list elements properly", () => {
        const {getByText} = render(<DndProvider backend={HTML5Backend}>
            <App/>
        </DndProvider>)

        listItemsData.map(item => expect(getByText(item.text)).toBeInTheDocument())
        expect(getByText(/add/i)).toBeInTheDocument()
    })
    test("should add element to list", () => {
        const {getByText, getByTestId} = render(<DndProvider backend={HTML5Backend}>
            <App/>
        </DndProvider>)

        const addButton = getByText(/add/i)
        const listWrapper = getByTestId("listWrapper")

        expect(addButton).toBeInTheDocument()

        expect(listWrapper.children.length).toBe(7)

        fireEvent.click(addButton)

        expect(listWrapper.children.length).toBe(8)
    })

    test("should remove element from list", () => {

        const removeMock = jest.fn()

        const {getByText} = render(<DndProvider backend={HTML5Backend}>
            <ListItem removeListElement={removeMock} key={listItemsData[0].id} item={listItemsData[0]}
                      index={1} moveListItem={jest.fn}/>
        </DndProvider>)

        const closeButton = getByText(/x/i)

        fireEvent.click(closeButton)

        expect(removeMock).toHaveBeenCalledWith(listItemsData[0].id)
    })

    test("should change elements position after dragging", () => {
        const {getAllByTestId, container} = render(<DndProvider backend={HTML5Backend}>
            <App/>
        </DndProvider>)

        const listItems = [...getAllByTestId("listItem")];

        const dropListItem = listItems[0]
        const listItemToMove = listItems[6].querySelector(".dragHandle")
        const listItemValues = [...container.querySelectorAll(".listItemValue")].map(i => i.textContent)

        expect(listItemValues.at(-1)).toBe(listItemsData.at(-1).text)

        fireEvent.dragStart(listItemToMove)
        fireEvent.dragEnter(dropListItem)
        fireEvent.dragOver(dropListItem)
        fireEvent.drop(dropListItem)

        expect(listItemValues.at(-1)).not.toBe(listItemsData.at(-1))
    })
})