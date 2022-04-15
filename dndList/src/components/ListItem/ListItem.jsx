import {StyledListItem} from "./ListItem.style";
import {useRef, useState} from "react";
import {useDrag, useDrop} from "react-dnd";

export const ListItem = ({item: {id, text}, index, moveListItem, removeListElement}) => {

    const [inputValue, setInputValue] = useState(id)

    const dragRef = useRef(null)
    const refPreview = useRef(null)

    const [{handlerId}, drop] = useDrop({
        accept: "listItem",
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            }
        },
        hover(item, monitor) {
            if (!dragRef.current) {
                return
            }
            const dragIndex = item.index
            const hoverIndex = index
            // Don't replace items with themselves
            if (dragIndex === hoverIndex) {
                return
            }

            const hoverBoundingRect = dragRef.current?.getBoundingClientRect()

            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

            const clientOffset = monitor.getClientOffset()

            const hoverClientY = clientOffset.y - hoverBoundingRect.top

            // Dragging downwards
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }
            // Dragging upwards
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }

            moveListItem(dragIndex, hoverIndex)
            item.index = hoverIndex
        },
    })
    const [, drag, preview] = useDrag({
        type: "listItem",
        item: () => {
            return {id, index}
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })

    drag(dragRef)
    drop(preview(refPreview))

    return (
        <StyledListItem className={"p-3 my-2"} key={id} ref={refPreview} data-testid={"listItem"} data-handler-id={handlerId}>
            <div className="flex items-center flex-col w-full">
                <div className="flex justify-between items-center w-full">
                    <div className="flex items-center">
                        <div className="rounded-full bg-purple-300 p-5 mr-3 dragHandle" ref={dragRef} data-testid={"dragHandle"}/>
                        <div className={"listItemValue"}>{text}</div>
                    </div>
                    <div className="cursor-pointer p-3 -mr-3" onClick={() => removeListElement(id)}>X</div>
                </div>
                <div className="my-3 w-full">
                    <textarea className="w-full bg-purple-100" onChange={(e) => setInputValue(e.target.value)} data-testid="textarea" style={{resize: "none"}} rows={3} value={inputValue}/>
                </div>
            </div>
        </StyledListItem>
    )
}