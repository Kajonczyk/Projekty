import './App.css';
import {Tabs} from "./components/Tabs/Tabs";


// interface TabItemsData {
//     name: string
// }

const tabItems = [
    {name: "88421"},
    {name: "88421"},
    {name: "88421"},
    {name: "88421"},
]

function App() {
    return (
        <div className="App">
            <Tabs tabSize={"small"} tabItems={tabItems} mode={"underline"}/>
            <Tabs tabSize={"small"} tabItems={tabItems} mode={"background"}/>

            <Tabs tabSize={"large"} tabItems={tabItems} mode={"underline"}/>
            <Tabs tabSize={"large"} tabItems={tabItems} mode={"background"}/>

            <Tabs tabSize={"auto"} tabItems={tabItems} mode={"underline"}/>
            <Tabs tabSize={"auto"} tabItems={tabItems} mode={"background"}/>
        </div>
    );
}

export default App;
