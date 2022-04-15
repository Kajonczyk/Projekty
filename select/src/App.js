import './App.css';
import {CustomSelect} from "./components/select/select";

const customStyles = {
    control: (provided) => ({
        ...provided,
        backgroundColor: "rgba(255,165,0,1)",
        boxShadow: '0!important',
        '&:hover': {
            border: '1px solid transparent!important'
        }
    }),
    input: (provided) => ({
        ...provided,
        color: "white"
    }),
    singleValue: (provided) => ({
        ...provided,
        color: "white"
    }),
    placeholder: (provided) => ({
        ...provided,
        color: "white"
    }),
    indicatorSeparator: (provided) => ({
        ...provided,
        display: "none"
    }),
    dropdownIndicator: (provided) => ({
        ...provided,
        color: "white",
    }),
    menuList: (provided) => ({
        ...provided,
        backgroundColor: "rgba(255,165,0,0.6)",
        padding: 0
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: "orange",
        color: "white",
        opacity: state.isFocused ? 1 : 0.6,
    })
}

const options = [
    {value: 'Frontend', label: 'Frontend'},
    {value: 'Backend', label: 'Backend'},
    {value: 'DevOps', label: 'DevOps'},
];

function App() {

    return (
        <div className="App">
            <div className="customSelect">
                <CustomSelect options={options} styles={customStyles}/>
            </div>
        </div>
    );
}

export default App;
