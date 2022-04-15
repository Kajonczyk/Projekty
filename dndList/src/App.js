import './App.css';
import {v4 as uuidv4} from 'uuid';
import {useCallback, useState} from "react";
import update from 'immutability-helper'
import {List} from "./components/List/List";

const listItemsData = [
    {id: uuidv4(), text: "Jag00dka"},
    {id: uuidv4(), text: "W0JT3K"},
    {id: uuidv4(), text: "K4M1L"},
    {id: uuidv4(), text: "Name"},
    {id: uuidv4(), text: "Great"},
    {id: uuidv4(), text: "Amazing"},
    {id: uuidv4(), text: "Lorem Ipsum is cool"},
]

function App() {

    const [listItems, setListItems] = useState(listItemsData)

    const clickHandler = () => {
        const id = uuidv4();
        setListItems((prev) => [...prev, {id, text: id.slice(0, 10)}])
    }

    const removeListElement = (id) => {
        setListItems((prev) => prev.filter(item => item.id !== id))
    }

    const moveListItem = useCallback((dragIndex, hoverIndex) => {
        setListItems((prevCards) =>
            update(prevCards, {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, prevCards[dragIndex]],
                ],
            }),
        )
    }, [])

    return (
        <div className="App">
            <button className="py-2 px-8 m-4 bg-green-500 rounded-sm text-white" onClick={clickHandler}>Add</button>
            <List moveListItem={moveListItem} removeListElement={removeListElement} listItems={listItems}/>
        </div>
    );
}

export default App;
